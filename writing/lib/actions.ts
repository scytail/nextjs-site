'use server';

import { Tables } from '@/app/api/models/database.types';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { createTitle, updateTitle } from "@/lib/api";
import { refresh } from 'next/cache';
import { Logger } from './logger';

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
    await createTitle(updatedTitleData as Tables<'titles'>);
  }

  refresh(); // Refresh the page to reflect the changes
}