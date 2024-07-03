import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://dxfdcalyrfhzicmqgngu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZmRjYWx5cmZoemljbXFnbmd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwMjU1NTQsImV4cCI6MjAzNTYwMTU1NH0.SHXcyD8TiVsXxbKXfUaDY42zYT1dLXZnz_W1u28oBAg')