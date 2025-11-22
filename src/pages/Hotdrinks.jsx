import Spinner from "../ui/Spinner/Spinner"

import useFetchData from "../hooks/useFetchData"

import { getHotDrinks } from "../services/apiHotdrinks"

export default function Hotdrinks() {

     const {
          isLoading: isLoadingHotdrinks,
          data: hotdrinks,
          error: errorHotdrinks
     } =
          useFetchData(["hotdrinks"], getHotDrinks);

     if (isLoadingHotdrinks) {

          return (
               <div className="flex justify-center items-center h-full">
                    <Spinner />
               </div>
          )
     }

}