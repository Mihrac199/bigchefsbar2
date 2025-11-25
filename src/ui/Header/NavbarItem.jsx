import { NavLink } from "react-router-dom"

export default function NavbarItem({ to, children }) {

     return (

          <li>

               <NavLink to={"/" + to}>
                    <p className="underline">{children}</p>
               </NavLink>

          </li>

     )

}