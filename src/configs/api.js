import axios from "axios";

import { getCookie, setCookie } from "@/utils/cookies";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (req) => {
    const accessToken = getCookie("accessToken");

    if (accessToken) {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return req;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await getNewToken();
      if (res?.response?.status === 201) {
        setCookie({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
        return api(originalRequest);
      } else {
        setCookie({});
      }
    }
    return Promise.reject(error);
  }
);

export default api;

const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken");

  if (!refreshToken) return;

  try {
    const response = await api.post("/auth/refresh-token", { refreshToken });
    return { response };
  } catch (error) {
    return { error };
  }
};
