import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.URL;
const api_key = import.meta.env.API_KEY

export const supabase = createClient(URL, API_KEY);