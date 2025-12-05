import useFetchData from "../hooks/useFetchData"

import { getSmoothieShakes } from "../services/apiSmoothieShakes"

import StyledCart from "../helpers/StyledCart"

import Spinner from "../ui/Spinner/Spinner"

export default function SmoothieShakes() {

     const {
          isLoading: isLoadingSmoothieShakes,
          data: smoothieShakes,
          error: errorSmoothieShakes
     } = useFetchData(["smoothieShakes"], getSmoothieShakes)

     if (isLoadingSmoothieShakes) return <Spinner />

     return (

          <ul>
               {smoothieShakes.map(smoothieShake => <StyledCart product={smoothieShake} key={smoothieShake.id} />)}
          </ul>

     )

}