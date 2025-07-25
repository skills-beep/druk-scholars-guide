// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sapprctlkiwfhyddvjxh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcHByY3Rsa2l3Zmh5ZGR2anhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMjcwMTcsImV4cCI6MjA2ODYwMzAxN30.T7QCLx_ZQ7HHjVibo5CH4Zic26Dz0wkAHzC9lTRzMRk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});