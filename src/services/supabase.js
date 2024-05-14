import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bebkskipgocueuvchdvi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlYmtza2lwZ29jdWV1dmNoZHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM2NzQ5MjcsImV4cCI6MjAyOTI1MDkyN30.WZBlLxiVki3awTj9BqHNejb5BQOry0tkd8tfPRVexI0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
