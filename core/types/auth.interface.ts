export interface IAuthResponse {
  user: {
    id: number;
    email: string;
  };
  accessToken: string;
}
