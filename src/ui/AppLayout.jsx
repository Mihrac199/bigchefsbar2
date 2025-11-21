import { Outlet } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"

export default function AppLayout({ username }) {

     return (

          <div className="flex flex-col h-screen font-mono">
               <Header username={username} />

               <main className="flex-1 p-2.5 bg-stone-100 overflow-y-scroll">
                    <Outlet />
               </main>

               <Footer />
          </div>

     )

}