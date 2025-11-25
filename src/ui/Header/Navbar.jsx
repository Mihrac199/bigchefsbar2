import NavbarItem from "./NavbarItem"

export default function Navbar({ onClose }) {

     return (

          <nav onClick={onClose} className="absolute top-46 right-1 p-3 rounded-4xl backdrop-blur-sm shadow-2xl">
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