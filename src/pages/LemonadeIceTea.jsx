import useFetchData from "../hooks/useFetchData"

import { getLemonadeIceTea } from "../services/apiLemonadeIceTea"

import Spinner from "../ui/Spinner/Spinner"

import StyledCart from "../helpers/StyledCart"

export default function LemonadeIceTea() {

     const {
          isLoading: isLoadingLemonadeIceTea,
          data: lemonadeIceTea,
          error: errorLemonadeIceTea
     } = useFetchData(["lemonadeIceTea"], getLemonadeIceTea);

     if (isLoadingLemonadeIceTea) return <Spinner />

     return (

          <ul>
               {lemonadeIceTea.map(lemonadeIceTeaItem => <StyledCart product={lemonadeIceTeaItem} key={lemonadeIceTeaItem.id} />)}
          </ul>

     )

}