import supabase, { supabaseUrl } from "./supabase"

export async function getLemonadeIceTea() {

     const { data, error } = await supabase.from('lemonadeIceTea').select('*');

     if (error) {
          console.log(error);
          throw new Error("Lemonade / IceTeas Could Not Be Loaded");
     }

     return data;

}