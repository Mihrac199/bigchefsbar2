import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Homepage({ setUsername }) {

     const [tempname, setTempname] = useState("");
     const navigate = useNavigate();

     function handleSubmit(e) {
          e.preventDefault();
          if (!tempname) return;
          setUsername(tempname);
          navigate("/hotdrinks");
     }

     return (

          <form
               className="flex flex-col justify-center items-center h-full"
               onSubmit={handleSubmit}>

               <p className="font-semibold">Welcome... Please Start by Telling Us Your Name</p>

               <input
                    className="border rounded-4xl p-3 mt-5 w-full sm:w-60"
                    placeholder="Your Name..."
                    type="text"
                    value={tempname}
                    onChange={e => setTempname(e.target.value)}
               />

               {tempname !== "" &&
                    <button
                         className="mt-5 border rounded-4xl p-3 px-8 cursor-pointer">
                         Start
                    </button>
               }

          </form>

     )

}