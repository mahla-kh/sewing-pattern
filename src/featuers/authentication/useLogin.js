import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, status } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user", data.user]);
      toast.success("در حال انتقال ...");
      navigate("/profile", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("ایمیل یا پسورد نامعتبر است !");
    },
  });

  const isLoading = status === "pending";

  return { login, isLoading };
  //   return { login, isLoading: isLoading ?? true };
}
