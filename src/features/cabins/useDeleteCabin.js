import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  //mutate用于更改数据，这里是删除cabin row
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    // 成功时，把cabins的状态改为陈旧，可以重置
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    // 失败时，弹出错误信息
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
