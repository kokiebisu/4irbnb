export interface IAuthServiceConstructoParams {
  service: IAuthClient;
}

export interface IAuthService extends IAuthClient {
  generateIAMPolicy(params: IAuthServiceGenerateIAMPolicyParams): IIAMPolicy;
  convertClaimsToPolicyStatements(params: IClaims): IIAMPolicyStatement[];
}

export interface IAuthClient {
  validateToken({
    authorizationToken,
  }: IAuthServiceValidateTokenParams): Promise<boolean>;
  register(params: any): Promise<any>;
  login(params: any): Promise<any>;
}

export interface IIAMPolicy {
  prinicpalId: string;
  policyDocument: {
    Version: "string";
    Statement: IIAMPolicyStatement[];
  };
}

export interface IClaims {
  [key: string]: any;
}

export interface IIAMPolicyStatement {
  Action: string;
  Effect: string;
  Resource: string;
}

export interface IAuthServiceGenerateIAMPolicyParams {
  claims: { method: "*"; path: string }[];
  awsAccountId: string;
  apiGatewayARN: string;
}

export interface IAuthServiceValidateTokenParams {
  authorizationToken: string;
}

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

export interface IAuthServiceLoginParams {
  firstName: string;
  lastName: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  email: string;
  password: string;
}
