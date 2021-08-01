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
  generateIAMPolicy(params: IAuthServiceGenerateIAMPolicyParams): IIAMPolicy;
  convertClaimsToPolicyStatements(params: IClaims): IIAMPolicyStatement[];
}

/**
 * @public
 */
export interface IAuthClient {
  validateToken({
    authorizationToken,
  }: IAuthServiceValidateTokenParams): Promise<boolean>;
  register(params: any): Promise<any>;
  login(params: any): Promise<any>;
}

/**
 * @public
 */
export interface IIAMPolicy {
  prinicpalId: string;
  policyDocument: {
    Version: "string";
    Statement: IIAMPolicyStatement[];
  };
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
export interface IAuthServiceGenerateIAMPolicyParams {
  claims: { method: "*"; path: string }[];
}

/**
 * @public
 */
export interface IAuthServiceValidateTokenParams {
  authorizationToken: string;
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
