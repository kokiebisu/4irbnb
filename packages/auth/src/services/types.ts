/**
 * @public
 */
export interface IAuthServiceConstructoParams {
  client: IAuthClient;
}

/**
 * @public
 */
export interface IAuthService extends IAuthClient {
  generateAllowPolicy(
    params: IAuthServiceGenerateAllowPolicyParams
  ): Promise<{
    principalId: string;
    policyDocument: {
      Version: string;
      Statement: { Action: string; Effect: string; Resource: string }[];
    };
  }>;
  generateDenyPolicy(): {
    principalId: string;
    policyDocument: {
      Version: string;
      Statement: { Action: string; Effect: string; Resource: string }[];
    };
  };
  convertClaimsToPolicyStatements(params: IClaims): IIAMPolicyStatement[];
}

/**
 * @public
 */
export interface IAuthClient {
  validateToken({
    authorizationToken,
  }: IAuthServiceValidateTokenParams): Promise<any>;
  register(params: any): Promise<any>;
  login(params: any): Promise<any>;
}

/**
 * @public
 */
export interface IClaims {
  [key: string]: any;
}

/**
 * @public
 */
export interface IIAMPolicyStatement {
  Action: string;
  Effect: string;
  Resource: string;
}

/**
 * @public
 */
export interface IAuthServiceGenerateAllowPolicyParams {
  resource: string;
}

/**
 * @public
 */
export interface IAuthServiceValidateTokenParams {
  token: string;
}

/**
 * @public
 */
export interface IAuthServiceRegisterParams {
  data: {
    firstName: string;
    lastName: string;
    birthYear: string;
    birthMonth: string;
    birthDay: string;
    email: string;
    password: string;
  };
}

/**
 * @public
 */
export interface IAuthServiceLoginParams {
  firstName: string;
  lastName: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  email: string;
  password: string;
}
