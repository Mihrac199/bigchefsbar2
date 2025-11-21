import { useState } from "react"
import Logo from "./Logo"
import Navbar from "./Navbar"

export default function Header() {

     const [show, setShow] = useState(false);

     return (

          <header className="flex justify-between items-center p-8 bg-amber-300 rounded-b-3xl">

               <Logo />
               <div>
                    <button
                         className="cursor-pointer p-3 border rounded-4xl"
                         onClick={() => setShow(show => !show)}>Products</button>
                    {show && <Navbar onClose={() => setShow(false)} />}
               </div>
               <div>User</div>

          </header>

     )

}