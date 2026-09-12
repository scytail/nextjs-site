'use server';

import { supabasePublicSchemaClient } from './base';
import { Tables, TablesInsert } from '../models/database.types';
import { get, put, del, PutBlobResult } from '@vercel/blob';

/**
 * Get the list of chapters for a given title ID
 * @param titleId - The ID of the title to fetch chapters for
 * @returns Promise containing the list of chapters
 */
export async function getChapterList(titleId: string): Promise<Tables<'chapters'>[]> {
  const { data, error } = await supabasePublicSchemaClient.from('chapters').select('*').eq('title_id', titleId).order('chapter_number', { ascending: true });

  if (error) {
    throw new Error(`Error fetching chapter list for title ID ${titleId}: ${error.message}`);
  }

  return data;
}

/**
 * Get the chapter count for a given title ID
 * @param titleId - The ID of the title to get the chapter count for
 * @returns Promise containing the chapter count for the title
 */
export async function getTitleChapterCount(titleId: string): Promise<number> {
  const chapterCount = await supabasePublicSchemaClient.from('chapters').select('id', { count: 'exact' }).eq('title_id', titleId);

  if (chapterCount.error) {
    throw new Error(`Error fetching chapter count: ${chapterCount.error.message}`);
  }

  return chapterCount.count || 0;
}

/**
 * Get the metadata for a specific chapter
 * @param titleId - The ID of the title to fetch chapter metadata for
 * @param chapterNumber - The number of the chapter to fetch metadata for
 * @returns Promise containing the chapter metadata
 */
export async function getChapterMetadata(titleId: string, chapterNumber: number): Promise<Tables<'chapters'>> {
  const { data, error } = await supabasePublicSchemaClient.from('chapters').select('*').eq('title_id', titleId).eq('chapter_number', chapterNumber).select().limit(1).single();

  if (error) {
    throw new Error(`Error fetching chapter data: ${error.message}`);
  }

  return data;
}

/**
 * Create metadata for a new chapter
 * @param titleId - The ID of the title to create the chapter for
 * @param chapterData - The data for the new chapter
 * @returns Promise containing the created chapter metadata
 */
export async function createChapterMetadata(chapterData: TablesInsert<'chapters'>): Promise<Tables<'chapters'>> {
  const { data, error } = await supabasePublicSchemaClient.from('chapters').insert(chapterData).select().limit(1).single();

  if (error) {
    throw new Error(`Error creating chapter metadata: ${error.message}`);
  }

  return data;
}

/**
 * Get the blob content for a specific chapter
 * @param blobPath - The path to the blob content
 * @returns Promise containing the blob content
 */
export async function getChapterBlob(blobPath: string): Promise<ReadableStream> {
  const result = await get(blobPath, { access: 'private' });
 
  if (result?.statusCode !== 200) {
    throw new Error(`Error fetching chapter blob content: ${result?.statusCode}`);
  }
 
  return result.stream;
}

/**
 * Upload a blob for a specific chapter
 * @param blobPath - The path to upload the blob content
 * @param file - The file to upload
 * @returns Promise containing the uploaded blob
 */
export async function uploadChapterBlob(blobPath: string, file: File): Promise<PutBlobResult> {
  const result = await put(blobPath, file, { access: 'private', allowOverwrite: true });
  return result;
}

/**
 * Delete the metadata for a specific chapter
 * @param titleId - The ID of the title to delete the chapter for
 * @param chapterNumber - The number of the chapter to delete
 * @returns Promise that resolves when the chapter metadata is deleted
 */
export async function deleteChapterMetaData(chapterId: string): Promise<void> {
  const { error } = await supabasePublicSchemaClient.from('chapters').delete().eq('id', chapterId);

  if (error) {
    throw new Error(`Error deleting chapter metadata: ${error.message}`);
  }
}

/**
 * Delete a chapter blob from storage
 * @param blobPath - The path to the blob to delete
 * @returns Promise that resolves when the blob is deleted
 */
export async function deleteChapterBlob(titleId: string, fileName: string): Promise<void> {
  const blobPath = `chapters/${titleId}/${fileName}`;
  await del(blobPath);
}
