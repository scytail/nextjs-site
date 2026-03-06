'use server';

import type { Title } from '../app/api/models/title';
import * as titleAPI from '../app/api/methods/titles';
import type { Chapter } from '../app/api/models/chapter';
import * as chapterAPI from '../app/api/methods/chapters';

/**
 * Fetch a document by ID from the API endpoint
 * @param id - The document ID
 * @returns Promise containing the document data
 */
export async function getTitle(id: string): Promise<Title> {
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
export async function getTitleByURL(url: string): Promise<Title> {
  const title = await titleAPI.getTitleByURL(url);
  
  if (!title) {
    throw new Error(`Title with URL ${url} not found`);
  }

  return title;
}

/**
 * Fetch all documents from the API endpoint
 * @returns Promise containing an array of document data
 */
export async function getTitles(): Promise<Title[]> {
  const titles: Title[] = await titleAPI.getTitles();

  return titles;
}

/**
 * Fetch a chapter by title ID and chapter number from the API endpoint
 * @param titleId 
 * @param chapterNumber 
 * @returns 
 */
export async function getChapter(titleId: string, chapterNumber: number) {
  const chapter = await chapterAPI.getChapter(titleId, chapterNumber);
  return chapter;
}

export async function getChapterList(titleId: string) {
  const chapterList = await chapterAPI.getChapterList(titleId);
  return chapterList;
}