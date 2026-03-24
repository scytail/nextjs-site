import { createClient } from '@supabase/supabase-js'
import { Database } from '../models/database.types';
import { Logger } from '@/lib/logger';

const logger = new Logger('Supabase');

const url: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const anonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
logger.log('Supabase URL:', url);
logger.log('Supabase Anon Key:', anonKey ? 'Loaded' : 'Not Loaded');

export const supabaseClient = createClient<Database>(url, anonKey)