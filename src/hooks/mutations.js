import { useMutation } from "@tanstack/react-query";

import api from "@/configs/api";

const useRegister = () => {
  const mutationFn = (mobile) => api.post("/auth/send-otp", { mobile });

  return useMutation({ mutationFn });
};

const useVerifyRegister = () => {
  const mutationFn = (data) => api.post("/auth/check-otp", data);

  return useMutation({ mutationFn });
};

export { useRegister, useVerifyRegister };
