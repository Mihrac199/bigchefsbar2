import { useQuery } from "@tanstack/react-query"

export default function useFetchData(queryKey, queryFn) {

     const { isLoading, data, error } = useQuery({
          queryKey,
          queryFn,
     })

     return { isLoading, data, error };

}