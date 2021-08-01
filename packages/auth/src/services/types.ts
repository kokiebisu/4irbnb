export interface IAuthServiceConstructoParams {
  service: IAuthService;
}

export interface IAuthService {
  validateToken({
    authorizationToken,
  }: IAuthServiceValidateTokenParams): Promise<boolean>;
  generateIAMPolicy({ policyStatements }: any): any;
}

export interface IAuthServiceValidateTokenParams {
  authorizationToken: string;
}
