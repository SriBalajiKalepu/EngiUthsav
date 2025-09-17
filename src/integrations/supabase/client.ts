import { createClient, type SupabaseClient } from '@supabase/supabase-js'

declare global {
  interface Window {
    __SUPABASE_URL__?: string;
    __SUPABASE_ANON_KEY__?: string;
  }
}

const supabaseUrl =
  (typeof window !== 'undefined' && window.__SUPABASE_URL__) ||
  (import.meta as any)?.env?.VITE_SUPABASE_URL;

const supabaseAnonKey =
  (typeof window !== 'undefined' && window.__SUPABASE_ANON_KEY__) ||
  (import.meta as any)?.env?.VITE_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase URL or Anon Key missing. Comments will fall back to local storage until configured.'
  );
}
