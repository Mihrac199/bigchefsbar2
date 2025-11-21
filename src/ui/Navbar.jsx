import NavbarItem from "./NavbarItem"

export default function Navbar({ onClose }) {

     return (

          <nav onClick={onClose} className="absolute top-30 p-3 border rounded-4xl">
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