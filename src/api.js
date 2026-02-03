import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ddhkqdbdabtnkzdkzbce.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkaGtxZGJkYWJ0bmt6ZGt6YmNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNDQ4NDAsImV4cCI6MjA4NTYyMDg0MH0.Xt-UTNvpp5zDMNNJml2fhaVlFnFD5BPbomO-05J_4Qo";
export const supabase = createClient(supabaseUrl, supabaseKey);
