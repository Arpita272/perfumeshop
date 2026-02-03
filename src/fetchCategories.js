import { supabase } from "./supabaseClient";

export async function fetchCategoriesWithProducts() {
  const { data, error } = await supabase
    .from("categories")
    .select("*, products(*)"); // same as your REST query

  if (error) {
    console.error("Error fetching:", error);
    return [];
  }

  return data;
}
