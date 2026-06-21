'use server';

import { supabasePublicAuthSchemaClient } from './base';
import { Tables } from '../models/database.types';

export async function getUser(userId: string): Promise<Tables<{ schema: 'auth_public' }, 'users' > | undefined> {
  // This uses a custom schema, see this documentation for more details: https://supabase.com/docs/guides/api/using-custom-schemas
  const { data, error } = await supabasePublicAuthSchemaClient.from('users').select('*').eq('username', userId);

  if (error) {
    throw new Error(`Error fetching user for ID ${userId}: ${error.message}`);
  }

  if (!data || data.length === 0) {
    return undefined;
  }

  return data[0];
}
