export interface AuthLogin {
   username: string;
   password: string;
}

export interface AuthResponse {
  status: number;
  msj: string;
  enter: boolean;
}
