import { $axios } from "@/config/axios.config";
import { getAuthUrl } from "@/utils/constants/url.constant";
import { IAuthResponse } from "../../types/auth.interface";
import {
  removeTokensFromStorage,
  saveTokenToStorage,
} from "@/utils/helpers/storage.helper";
import { AxiosResponse } from "axios";

export const AuthService = {
  async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    const response = await $axios.post<IAuthResponse>(getAuthUrl("/login"), {
      email,
      password,
    });
    if (response.data.accessToken)
      saveTokenToStorage(response.data.accessToken);

    return response;
  },

  async register(
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> {
    const response = await $axios.post<IAuthResponse>(getAuthUrl("/register"), {
      email,
      password,
    });
    if (response.data.accessToken)
      saveTokenToStorage(response.data.accessToken);

    return response;
  },

  logout() {
    removeTokensFromStorage();
  },
};
