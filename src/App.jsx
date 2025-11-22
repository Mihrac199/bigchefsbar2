import { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import AppLayout from "./ui/AppLayout"

import Homepage from "./pages/_Homepage"
import Hotdrinks from "./pages/Hotdrinks/Hotdrinks"
import FreshDetox from "./pages/FreshDetox"
import SmoothieShakes from "./pages/SmoothieShakes"
import LemonadeIceTea from "./pages/LemonadeIceTea"
import TheWorldCocktails from "./pages/TheWorldCocktails"

import PageNotFound from "./pages/PageNotFound"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

export default function App() {

  const [username, setUsername] = useState("");

  return (

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout username={username} />}>
            <Route index element={<Navigate replace to="homepage" />} />
            <Route path="homepage" element={<Homepage setUsername={setUsername} />} />
            <Route path="hotdrinks" element={<Hotdrinks />} />
            <Route path="freshDetox" element={<FreshDetox />} />
            <Route path="smoothieShakes" element={<SmoothieShakes />} />
            <Route path="lemonadeIceTea" element={<LemonadeIceTea />} />
            <Route path="theWorldCocktails" element={<TheWorldCocktails />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  )

}