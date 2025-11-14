import NavbarItem from "./NavbarItem"

export default function Navbar() {

     return (

          <nav>
               <ul>

                    <NavbarItem to={"hotdrinks"}>Hotdrinks</NavbarItem>
                    <NavbarItem to={"freshDetox"}>Fresh / Detox</NavbarItem>
                    <NavbarItem to={"smoothieShakes"}>Smoothie / Shakes</NavbarItem>
                    <NavbarItem to={"lemonadeIceTea"}>Lemonade / IceTea</NavbarItem>
                    <NavbarItem to={"theWorldCocktails"}>The World Cocktails</NavbarItem>

               </ul>
          </nav>

     )

}