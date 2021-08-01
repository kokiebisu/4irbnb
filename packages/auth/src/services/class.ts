import {
  IAuthService,
  IAuthServiceConstructoParams,
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
  #service: IAuthService;
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
  async validateAuthToken({
    authorizationToken,
  }: IAuthServiceValidateTokenParams) {
    this.#service.validateToken({ authorizationToken });
  }

  async register({}) {
    this.#service.register({});
  }

  async login({}) {
    this.#service.login({});
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
  }

  /**
   * @public
   * Generates IAM policies which authorizes the users to access or deny the API request
   * @param params - policyStatements
   *
   * @returns a policy document object
   */
  generatePolicy({ policyStatements }) {
    if (!policyStatements.length) {
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
        Statement: policyStatements.map(
          ({ action, apiName, apiStage, apiVerb, apiResource }) => {
            return {
              Action: "execute-api:Invoke",
              Effect: action,
              Resource: `${apiName}/${apiStage}/${apiVerb}/${apiResource}`,
            };
          }
        ),
      },
    };
  }
}
