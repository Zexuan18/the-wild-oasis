import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    // 这里接受一个promise， get方法会return一个promise
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
