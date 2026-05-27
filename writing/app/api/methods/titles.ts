'use server';

import { supabaseClient } from './base';
import { Tables } from '../models/database.types';

/**
 * Get all public titles
 * @returns Promise containing the list of titles
 */
export async function getPublicTitles(): Promise<Tables<'titles'>[]> {
  const { data, error } = await supabaseClient.from('titles').select().eq('private', false);

  if (error) {
    throw new Error(`Error fetching public titles: ${error.message}`);
  }

  return data;
}

/**
 * Get a title by its ID
 * @param titleId - the ID of the title to fetch
 * @returns Promise containing the title
 */
export async function getTitle(titleId: string): Promise<Tables<'titles'>> {
  const { data, error } = await supabaseClient.from('titles').select('*').eq('id', titleId).single();

  if (error) {
    throw new Error(`Error fetching title with ID ${titleId}: ${error.message}`);
  }

  return data;
}

/**
 * Get a title by its URL
 * @param url - the URL of the title to fetch
 * @returns Promise containing the title
 */
export async function getTitleByURL(url: string): Promise<Tables<'titles'>> {
  const { data, error } = await supabaseClient.from('titles').select('*').eq('title_url', url).single();

  if (error) {
    throw new Error(`Error fetching title with URL ${url}: ${error.message}`);
  }

  return data;
}
