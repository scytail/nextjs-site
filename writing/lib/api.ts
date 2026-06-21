'use server';

import * as titleAPI from '../app/api/methods/titles';
import * as chapterAPI from '../app/api/methods/chapters';
import * as authAPI from '../app/api/methods/auth';
import { Tables } from '../app/api/models/database.types';

/**
 * Fetch a document by ID from the API endpoint
 * @param id - The document ID
 * @returns Promise containing the document data
 */
export async function getTitle(id: string): Promise<Tables<'titles'>> {
  const title = await titleAPI.getTitle(id);
  
  if (!title) {
    throw new Error(`Title with ID ${id} not found`);
  }

  return title;
}

/**
 * Fetch a document by ID from the API endpoint
 * @param id - The document ID
 * @returns Promise containing the document data
 */
export async function getTitleByURL(url: string): Promise<Tables<'titles'>> {
  const title = await titleAPI.getTitleByURL(url);
  
  if (!title) {
    throw new Error(`Title with URL ${url} not found`);
  }

  return title;
}

export async function getTitleChapterCount(titleId: string): Promise<number> {
  const chapterCount = await chapterAPI.getTitleChapterCount(titleId);

  if (chapterCount === undefined) {
    throw new Error(`Chapter count not found for title ID ${titleId}`);
  }

  return chapterCount;
}

/**
 * Fetch all public titles from the API endpoint
 * @returns Promise containing an array of title data
 */
export async function getPublicTitles(): Promise<Tables<'titles'>[]> {
  const titles = await titleAPI.getPublicTitles();

  return titles;
}

/**
 * Fetch a chapter by title ID and chapter number from the API endpoint
 * @param titleId - The ID of the title the chapter belongs to
 * @param chapterNumber - The number of the chapter to fetch
 * @returns Promise containing the chapter data
 */
export async function getChapterMetadata(titleId: string, chapterNumber: number): Promise<Tables<'chapters'>> {
  const chapter = await chapterAPI.getChapterMetadata(titleId, chapterNumber);

  if (!chapter) {
    throw new Error(`Chapter ${chapterNumber} for title ID ${titleId} not found`);
  }

  return chapter;
}

/**
 * Fetch the blob content for a given chapter path from the API endpoint
 * @param blobPath - The path to the chapter blob content
 * @returns Promise containing the blob content
 */
export async function getChapterBlob(blobPath: string): Promise<ReadableStream> {
  const blobContent = await chapterAPI.getChapterBlob(blobPath);

  if (!blobContent) {
    throw new Error(`Blob content not found for path ${blobPath}`);
  }

  return blobContent;
}

/**
 * Fetch the chapter list for a given title ID from the API endpoint
 * @param titleId - The ID of the title to fetch chapters for
 * @returns Promise containing the list of chapters
 */
export async function getChapterList(titleId: string): Promise<Tables<'chapters'>[]> {
  const chapterList = await chapterAPI.getChapterList(titleId);

  if (!chapterList || chapterList.length === 0) {
    throw new Error(`No chapters found for title ID ${titleId}`);
  }

  return chapterList;
}

export async function getUser(userId: string): Promise<Tables<{ schema: 'auth_public' }, 'users' > | undefined> {
  return await authAPI.getUser(userId);
}