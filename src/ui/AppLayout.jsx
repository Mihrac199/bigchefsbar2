import { Outlet } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"

export default function AppLayout() {

     return (

          <div className="flex flex-col h-screen font-mono">
               <Header />

               <main className="flex-1 p-10 bg-stone-100 overflow-y-scroll">
                    <Outlet />
               </main>

               <Footer />
          </div>

     )

}