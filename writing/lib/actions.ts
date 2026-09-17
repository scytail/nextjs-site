'use server';

import { Tables } from '@/app/api/models/database.types';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { createChapter, createTitle, updateTitle, deleteChapter, deleteTitle } from "@/lib/api";
import { refresh } from 'next/cache';
import { Logger } from './logger';
import { redirect } from 'next/dist/client/components/navigation';

const logger = new Logger('Actions');

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid login.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function saveTitle(formData: FormData) {
  const updatedTitleData: Partial<Tables<'titles'>> = {
    title_name: formData.get('titleName') as string,
    title_url: formData.get('titleUrl') as string,
    private: formData.get('titlePrivate') === 'true',
    summary: formData.get('titleDescription') as string,
  };

  const titleId = formData.get('titleId') as string | null;

  if (titleId) {
    logger.log(`Updating title with ID: ${titleId}`);
    await updateTitle(titleId, updatedTitleData);
  } else {
    logger.log(`Creating new title with name ${updatedTitleData.title_name}`);
    const createdTitle = await createTitle(updatedTitleData as Tables<'titles'>);

    redirect(`/writing/admin/title/${createdTitle.title_url}`);
  }

  refresh(); // Refresh the page to reflect the changes
}

export async function uploadChapter(formData: FormData, titleId: string, chapterNumber: number) {
  const chapterFile = formData.get('chapterFile') as File;
  if (!chapterFile) {
    throw new Error('No file selected');
  }

  await createChapter(titleId, chapterFile, chapterNumber);

  refresh(); // Refresh the page to reflect the changes
}

export async function removeChapter(chapterId: string, titleId: string, fileName: string) {
  await deleteChapter(chapterId, titleId, fileName);

  refresh(); // Refresh the page to reflect the changes
}

export async function removeTitle(titleId: string) {
  await deleteTitle(titleId);

  refresh(); // Refresh the page to reflect the changes
}
