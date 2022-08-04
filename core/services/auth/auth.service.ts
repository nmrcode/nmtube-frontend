import { $axios } from "@/config/axios.config";
import { ENDPOINT } from "@/services/endpoints.config";
import { IAuthResponse } from "@/services/auth/auth.interface";

export const AuthService = {
  login: async (email: string, password: string) => {
    const res = await $axios.post<IAuthResponse>(ENDPOINT.AUTH.LOGIN, {
      email,
      password,
    });

    if (res.data.accessToken) {
      localStorage.setItem("token", res.data.accessToken);
    }

    return res;
  },

  register: async (email: string, password: string) => {
    const res = await $axios.post<IAuthResponse>(ENDPOINT.AUTH.LOGIN, {
      email,
      password,
    });

    if (res.data.accessToken) {
      localStorage.setItem("token", res.data.accessToken);
    }

    return res;
  },
};
