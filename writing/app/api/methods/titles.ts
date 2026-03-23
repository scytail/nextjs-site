'use server';

import { supabaseClient } from './base';
import { Tables } from '../models/database.types';

/**
 * Get all titles
 * @returns Promise containing the list of titles
 */
export async function getTitles(): Promise<Tables<'titles'>[]> {
  const { data, error } = await supabaseClient.from('titles').select();

  if (error) {
    throw new Error(`Error fetching titles: ${error.message}`);
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
