import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "@/configs/api";

const useRegister = () => {
  const mutationFn = (mobile) => api.post("/auth/send-otp", { mobile });

  return useMutation({ mutationFn });
};

const useVerifyRegister = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("/auth/check-otp", data);
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["get-profile"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

export { useRegister, useVerifyRegister };
