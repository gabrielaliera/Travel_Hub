import { createClient } from '@supabase/supabase-js'

//Access enviromental variables
const url = import.meta.env.VITE_URL
const API_key = import.meta.env.VITE_APP_ACCESS_KEY;

export const supabase = createClient(url, API_key);