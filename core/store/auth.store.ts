import { makeAutoObservable } from "mobx";
import { AuthService } from "@/services/auth/auth.service";
import { AxiosError } from "axios";
import { IAuthResponse } from "../types/auth.interface";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  isAuth: boolean = false;
  errors: any = "";

  async login(email: string, password: string) {
    try {
      const res = await AuthService.login(email, password);
      this.isAuth = true;
    } catch (error) {
      const err = error as AxiosError;
      this.errors = err.response?.data;
    }
  }
}
