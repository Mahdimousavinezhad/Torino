import { useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useProfile = () => {

  const queryFn = () => api.get("/user/profile");
  const queryKey = ["get-profile"];

  return useQuery({ queryFn, queryKey });
};

export { useProfile };
