import supabase, { supabaseUrl } from "./supabase"

export async function getCocktails() {

     const { data, error } = await supabase.from('theWorldCocktails').select('*');

     if (error) {
          console.log(error);
          throw new Error("Cocktails Could Not Be Loaded");
     }

     return data;

}