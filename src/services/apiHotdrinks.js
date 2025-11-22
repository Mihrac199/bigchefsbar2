import supabase, { supabaseUrl } from "./supabase"

export async function getHotDrinks() {

     const { data, error } = await supabase.from('hotdrinks').select('*');

     if (error) {
          console.log(error);
          throw new Error("Hot Drinks Could Not Be Loaded");
     }

     return data;

}