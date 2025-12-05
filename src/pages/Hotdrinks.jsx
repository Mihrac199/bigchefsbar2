import useFetchData from "../hooks/useFetchData"

import { getHotDrinks } from "../services/apiHotdrinks"

import Spinner from "../ui/Spinner/Spinner"

import StyledCart from "../helpers/StyledCart"

export default function Hotdrinks() {

     const {
          isLoading: isLoadingHotdrinks,
          data: hotdrinks,
          error: errorHotdrinks
     } = useFetchData(["hotdrinks"], getHotDrinks);

     if (isLoadingHotdrinks) return <Spinner />

     return (

          <ul>
               {hotdrinks.map(hotdrink => <StyledCart product={hotdrink} key={hotdrink.id} />)}
          </ul>

     )

}