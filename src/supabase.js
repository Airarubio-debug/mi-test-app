import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vpnhaldbhnhbkzgcrkic.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwbmhhbGRiaG5oYmt6Z2Nya2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyNTQ4OTQsImV4cCI6MjA5MzgzMDg5NH0.ammSjHz8Pc71-4LyV_2uilDyAF4xsbKD9oExEl16yUQ'

export const supabase = createClient(supabaseUrl, supabaseKey)