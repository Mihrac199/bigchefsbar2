import Logo from "./Logo"
import Navbar from "./Navbar"

export default function Header() {

     return (

          <header className="flex justify-between items-center p-10 bg-amber-300 rounded-b-3xl">

               <Logo />
               <Navbar />
               <div>User</div>

          </header>

     )

}