import { NavLink } from "react-router-dom"

export default function NavbarItem({ to, children }) {

     return (

          <li>

               <NavLink to={"/" + to}>
                    <p>{children}</p>
               </NavLink>

          </li>

     )

}