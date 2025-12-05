import useFetchData from "../hooks/useFetchData"

import { getFreshDetox } from "../services/apiFreshDetox"

import Spinner from "../ui/Spinner/Spinner"

import StyledCart from "../helpers/StyledCart"

export default function FreshDetox() {

     const {
          isLoading: isLoadingFreshDetox,
          data: freshDetox,
          error: errorFreshDetox
     } = useFetchData(["freshDetox"], getFreshDetox);

     if (isLoadingFreshDetox) return <Spinner />

     return (

          <ul>
               {freshDetox.map(freshDetoxItem => <StyledCart product={freshDetoxItem} key={freshDetoxItem.id} />)}
          </ul>

     )

}