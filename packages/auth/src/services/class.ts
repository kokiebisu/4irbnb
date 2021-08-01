import {
  IAuthClient,
  IAuthServiceConstructoParams,
  IAuthServiceGenerateIAMPolicyParams,
  IAuthServiceLoginParams,
  IAuthServiceRegisterParams,
  IAuthServiceValidateTokenParams,
} from "./types";

const apiPermissions = [
  {
    arn: "arn:aws:execute-api:REGION:ACCOUNTID:my-api-gw", // NOTE: Replace with your API Gateway API ARN
    resource: "my-resource", // NOTE: Replace with your API Gateway Resource
    stage: "dev", // NOTE: Replace with your API Gateway Stage
    httpVerb: "GET",
    scope: "email",
  },
];

/**
 * Blueprint that implements the AuthService
 */
export class AuthService {
  #service: IAuthClient;
  constructor({ service }: IAuthServiceConstructoParams) {
    this.#service = service;
  }

  /**
   * @public
   * Verify the access token with your Identity Provider here (check if your
   * Identity Provider provides an SDK).
   *
   * This example assumes this method returns a Promise that resolves to
   * the decoded token, you may need to modify your code according to how
   * your token is verified and what your Identity Provider returns.
   */
  async validateToken({ authorizationToken }: IAuthServiceValidateTokenParams) {
    this.#service.validateToken({ authorizationToken });
  }

  async register({ data }: IAuthServiceRegisterParams) {
    this.#service.register({
      data,
    });
  }

  async login({ email, password }: IAuthServiceLoginParams) {
    this.#service.login({ email, password });
  }

  /**
   * @public
   * Converts the claims to policy statements that can be used to generate iam policies to be returned
   * to the user
   */
  convertClaimsToPolicyStatements({ claims }) {
    /**
     * Some logic
     */
    return {
      firstName: "John",
      lastName: "Parker",
    };
  }

  /**
   * @public
   * Generates IAM policies which authorizes the users to access or deny the API request
   * @param params - policyStatements
   *
   * @returns a policy document object
   */
  generateIAMPolicy({
    claims,
    awsAccountId,
    apiGatewayARN,
  }: IAuthServiceGenerateIAMPolicyParams) {
    if (!claims.length) {
      return {
        principalId: "user",
        policyDocument: {
          Version: "2012-10-17",
          Statement: [
            {
              Action: "execute-api:Invoke",
              Effect: "Deny",
              Resource: "*",
            },
          ],
        },
      };
    }

    return {
      principalId: "user",
      policyDocument: {
        Version: "2012-10-17",
        Statement: claims.map(({ method, path }: any) => {
          return {
            Action: "execute-api:Invoke",
            Effect: "Allow",
            Resource: `arn:aws:execute-api:us-east-1:${awsAccountId}:${apiGatewayARN}/${method}/${path}`,
          };
        }),
      },
    };
  }
}
