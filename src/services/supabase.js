import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = 'https://abjttnksxuljskdjtjhk.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFianR0bmtzeHVsanNrZGp0amhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MzM1NDMsImV4cCI6MjA3NTQwOTU0M30.QhHj_k-cVvFEL0WVO3B96lM3xhaH4j61lGk04aAgX_M"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;