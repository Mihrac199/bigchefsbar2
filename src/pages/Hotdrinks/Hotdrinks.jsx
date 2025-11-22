import useFetchData from "../../hooks/useFetchData"

import { getHotDrinks } from "../../services/apiHotdrinks"

import Spinner from "../../ui/Spinner/Spinner"

import HotdrinksItem from "./HotdrinksItem"

export default function Hotdrinks() {

     const {
          isLoading: isLoadingHotdrinks,
          data: hotdrinks,
          error: errorHotdrinks
     } =
          useFetchData(["hotdrinks"], getHotDrinks);


     if (isLoadingHotdrinks) return <Spinner />

     return (

          <>
               {hotdrinks.map(hotdrink => <HotdrinksItem hotdrink={hotdrink} key={hotdrink.id} />)}
          </>

     )

}