import { AiFillCaretRight } from "react-icons/ai"
import { FaGlassMartini } from "react-icons/fa"
import { PiMagnifyingGlassThin } from "react-icons/pi"

export default function StyledCart({ product }) {

     const { image, name, glassName, ingredients } = product;

     return (

          <li className="flex flex-col gap-5 rounded-2xl shadow-2xl p-2 mb-10">

               <img
                    className="w-72 rounded-full mx-auto"
                    src={image}
                    alt="name" />

               <div className="text-center">

                    <div className="flex justify-center items-center gap-1">
                         <span className="text-xl"><AiFillCaretRight /></span>
                         <p className="font-black">{name}</p>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                         <span><FaGlassMartini /></span>
                         <p>{glassName}</p>
                    </div>

                    <div>
                         <p className="flex justify-center gap-1">
                              <span className="text-xl">
                                   <PiMagnifyingGlassThin />
                              </span>
                              {ingredients}
                         </p>
                    </div>

               </div>

          </li>

     )

}