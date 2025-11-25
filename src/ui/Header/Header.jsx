import { useState } from "react"

import Logo from "./Logo"
import Navbar from "./Navbar"

import { FaMartiniGlassEmpty } from "react-icons/fa6"
import { FaUser } from "react-icons/fa6"

export default function Header({ username }) {

     const [show, setShow] = useState(false);

     const breakPointSm = "flex flex-col gap-6 p-1.5 bg-amber-300 rounded-b-3xl text-center items-center";

     return (

          <header className={breakPointSm}>
               <Logo />

               {username &&
                    <>
                         <div>

                              <button
                                   className={`cursor-pointer p-1.5 flex justify-center items-center gap-1 ${show ? `border border-stone-500 rounded-4xl p-0.5` : ``}`}
                                   onClick={() => setShow(show => !show)}>
                                   <span><FaMartiniGlassEmpty /></span>
                                   <p>Products</p>
                              </button>

                              {show && <Navbar onClose={() => setShow(false)} />}
                         </div>

                         <div className="flex justify-center items-center gap-1">
                              <span><FaUser /></span>
                              <p className="capitalize">{username}</p>
                         </div>
                    </>
               }
          </header >

     )

}