'use server';

import { supabaseClient } from './base';
import { Tables } from '../models/database.types';
import { get } from '@vercel/blob';

/**
 * Get the list of chapters for a given title ID
 * @param titleId - The ID of the title to fetch chapters for
 * @returns Promise containing the list of chapters
 */
export async function getChapterList(titleId: string): Promise<Tables<'chapters'>[]> {
  const { data, error } = await supabaseClient.from('chapters').select('*').eq('title_id', titleId).order('chapter_number', { ascending: true });

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
  const chapterCount = await supabaseClient.from('chapters').select('id', { count: 'exact' }).eq('title_id', titleId);

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
  const { data, error } = await supabaseClient.from('chapters').select('*').eq('title_id', titleId).eq('chapter_number', chapterNumber).single();

  if (error) {
    throw new Error(`Error fetching chapter data: ${error.message}`);
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


const fakeFile: string = `# header 1
## header 2
### header 3
#### header 4

normal *italic* **bold**

This is an unordered list:

- bullet one
- bullet two
- bullet three

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is an ordered list:

1. numbered one
2. numbered two
3. numbered three

This is one final paragraph to end the document.`;
