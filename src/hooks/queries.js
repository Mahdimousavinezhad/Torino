import { useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useProfile = () => {
  const queryFn = () => api.get("/user/profile");

  return useQuery({ queryFn, queryKey: ["get-profile"] });
};

export { useProfile };
