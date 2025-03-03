import { createClient } from '@supabase/supabase-js';

// console.log("ENV TEST:", process.env);

const SUPABASE_URL = process.env.REACT_APP_SUPERBASE_URL; // paste supabase url here
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPERBASE_ANON_KEY; // paste supabase anon key here

console.log(SUPABASE_URL)

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
