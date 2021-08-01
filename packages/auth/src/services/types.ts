export interface IAuthServiceConstructoParams {
  service: IAuthService;
}

export interface IAuthService {
  validateToken({
    authorizationToken,
  }: IAuthServiceValidateTokenParams): Promise<boolean>;
  register(params: any): Promise<any>;
  login(params: any): Promise<any>;
}

export interface IAuthServiceValidateTokenParams {
  authorizationToken: string;
}

export interface IAuthServiceRegisterParams {
  firstName: string;
  lastName: string;
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  email: string;
  password: string;
}
