'use server';

import * as titleAPI from '../app/api/methods/titles';
import * as chapterAPI from '../app/api/methods/chapters';
import * as authAPI from '../app/api/methods/auth';
import { Tables, TablesInsert } from '../app/api/models/database.types';

import { Logger } from '@/lib/logger';

const logger = new Logger('API');

/**
 * Fetch a document by ID
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
 * Fetch a document by URL
 * @param url - The document URL
 * @returns Promise containing the document data
 */
export async function getTitleByURL(url: string): Promise<Tables<'titles'>> {
  const title = await titleAPI.getTitleByURL(url);
  
  if (!title) {
    throw new Error(`Title with URL ${url} not found`);
  }

  return title;
}

/**
 * Fetch the chapter count for a given title ID
 * @param titleId - The ID of the title to fetch chapter count for
 * @returns Promise containing the chapter count
 */
export async function getTitleChapterCount(titleId: string): Promise<number> {
  const chapterCount = await chapterAPI.getTitleChapterCount(titleId);

  if (chapterCount === undefined) {
    throw new Error(`Chapter count not found for title ID ${titleId}`);
  }

  return chapterCount;
}

/**
 * Fetch all public titles from the API endpoint
 * @returns Promise containing an array of public title data
 */
export async function getPublicTitles(): Promise<Tables<'titles'>[]> {
  const titles = await titleAPI.getPublicTitles();

  return titles;
}

/**
 * Fetch all titles from the API endpoint
 * @returns Promise containing an array of all title data
 */
export async function getAllTitles(): Promise<Tables<'titles'>[]> {
  const titles = await titleAPI.getAllTitles();

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
    return [];
  }

  return chapterList;
}

/**
 * Fetch a user by ID from the API endpoint
 * @param userId - The ID of the user to retrieve
 * @returns Promise containing the user matching the user ID
 */
export async function getUser(userId: string): Promise<Tables<{ schema: 'auth_public' }, 'users' > | undefined> {
  return await authAPI.getUser(userId);
}

/**
 * Update a title by ID
 * @param titleId - The ID of the title to update
 * @param titleData - Any part of a title row to update
 * @returns Promise containing the updated title
 */
export async function updateTitle(titleId: string, titleData: Partial<Tables<'titles'>>): Promise<Tables<'titles'>> {
  return await titleAPI.updateTitle(titleId, titleData);
}

/**
 * Create a new title
 * @param titleData - The title row to create
 * @returns Promise containing the created title
 */
export async function createTitle(titleData: Tables<'titles'>): Promise<Tables<'titles'>> {
  return await titleAPI.createTitle(titleData);
}

/**
 * Create a new chapter for a given title ID
 * @param titleId - The ID of the title to create the chapter for
 * @param file - The file to upload as the chapter content
 * @param chapterData - Any additional data for the chapter
 * @returns Promise containing the created chapter
 */
export async function createChapter(titleId: string, file: File, chapterNumber: number): Promise<Tables<'chapters'>> {
  const path = `chapters/${titleId}/${file.name}`;
  const uploadResult = await chapterAPI.uploadChapterBlob(path, file);

  if (!uploadResult) {
    throw new Error(`Failed to upload chapter blob ${file.name} for title ID ${titleId}`);
  }

  const completeChapterData: TablesInsert<'chapters'> = {
    title_id: titleId,
    chapter_number: chapterNumber,
    chapter_url: uploadResult.pathname
  };
  const createdChapter = await chapterAPI.createChapterMetadata(completeChapterData);

  if (!createdChapter) {
    await chapterAPI.deleteChapterBlob(titleId, file.name);

    throw new Error(`Failed to create chapter metadata for title ID ${titleId}`);
  }

  return createdChapter;
}

export async function deleteChapter(chapterId: string, titleId: string, fileName: string): Promise<void> {
  logger.log(`Deleting chapter metadata with ID: ${chapterId}`);
  await chapterAPI.deleteChapterMetaData(chapterId);

  logger.log(`Deleting chapter blob for title ID: ${titleId} and file name: ${fileName}`);
  await chapterAPI.deleteChapterBlob(titleId, fileName);
}
