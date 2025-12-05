import useFetchData from "../hooks/useFetchData"

import { getCocktails } from "../services/apiCocktails"

import Spinner from "../ui/Spinner/Spinner"

import StyledCart from "../helpers/StyledCart"

export default function TheWorldCocktails() {

     const {
          isLoading: isLoadingCocktails,
          data: cocktails,
          error: errorCocktails
     } = useFetchData(["cocktails"], getCocktails);

     if (isLoadingCocktails) return <Spinner />

     return (

          <ul>
               {cocktails.map(cocktail => <StyledCart product={cocktail} key={cocktail.id} />)}
          </ul>

     )

}