import { NavLink } from "react-router-dom"

export default function NavbarItem({ to, children }) {

     return (

          <li>

               <NavLink to={"/" + to}>{children}</NavLink>

          </li>

     )

}