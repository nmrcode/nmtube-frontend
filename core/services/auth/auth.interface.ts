export interface IAuthResponse {
  user: {
    id: number;
    email: string;
  };
  accessToken: string;
}

export interface IAuthDto {
  email: string;
  password: string;
}
