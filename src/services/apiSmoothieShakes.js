import supabase, { supabaseUrl } from "./supabase"

export async function getSmoothieShakes() {

     const { data, error } = await supabase.from('smoothieShakes').select('*');

     if (error) {
          console.log(error);
          throw new Error("Smoothie / Shakes Could Not Be Loaded");
     }

     return data;

}