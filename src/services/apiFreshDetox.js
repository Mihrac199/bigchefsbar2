import supabase, { supabaseUrl } from "./supabase"

export async function getFreshDetox() {

     const { data, error } = await supabase.from('freshDetox').select('*');

     if (error) {
          console.log(error);
          throw new Error("Fresh / Detox Could Not Be Loaded");
     }

     return data;

}