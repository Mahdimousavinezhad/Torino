import { useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useProfile = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["get-profile"];

  return useQuery({ queryFn, queryKey });
};

const useCart = () => {
  const queryFn = () => api.get("/basket");
  const queryKey = ["get-basket"];

  return useQuery({ queryFn, queryKey });
};

const useGetMyTours = () => {
  const queryFn = () => api.get("/user/tours");
  const queryKey = ["get-userTours"];

  return useQuery({ queryFn, queryKey });
};

const useGetMyTransactions = () => {
  const queryFn = () => api.get("/user/transactions");
  const queryKey = ["get-userTransactions"];

  return useQuery({ queryFn, queryKey });
};

export { useProfile, useCart, useGetMyTours, useGetMyTransactions };
