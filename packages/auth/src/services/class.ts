import {
  IAuthClient,
  IAuthService,
  IAuthServiceConstructoParams,
  IAuthServiceGenerateAllowPolicyParams,
  IAuthServiceLoginParams,
  IAuthServiceRegisterParams,
  IAuthServiceValidateTokenParams,
} from "./types";

// const apiPermissions = [
//   {
//     arn: "arn:aws:execute-api:REGION:ACCOUNTID:my-api-gw", // NOTE: Replace with your API Gateway API ARN
//     resource: "my-resource", // NOTE: Replace with your API Gateway Resource
//     stage: "dev", // NOTE: Replace with your API Gateway Stage
//     httpVerb: "GET",
//     scope: "email",
//   },
// ];

/**
 * Blueprint that implements the AuthService
 */
export class AuthService implements IAuthService {
  #client: IAuthClient;
  constructor({ client }: IAuthServiceConstructoParams) {
    this.#client = client;
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
  async validateToken({ token }: IAuthServiceValidateTokenParams) {
    // await this.#client.validateToken({ authorizationToken });
    return token;
  }

  /**
   * @public
   * @param param0
   */
  async register({ data }: IAuthServiceRegisterParams) {
    this.#client.register({
      data,
    });
  }

  /**
   * @public
   * @param param0
   */
  async login({ email, password }: IAuthServiceLoginParams) {
    this.#client.login({ email, password });
  }

  /**
   * @public
   * Converts the claims to policy statements that can be used to generate iam policies to be returned
   * to the user
   */
  convertClaimsToPolicyStatements({ claims }: any) {
    /**
     * Some logic
     */
    console.log(claims);
    return [
      {
        Action: "John",
        Effect: "Parker",
        Resource: "",
      },
    ];
  }

  /**
   * @public
   * Generates IAM policies which authorizes the users to access or deny the API request
   * @param params - policyStatements
   *
   * @returns a policy document object
   */
  generateAllowPolicy({ resource }: IAuthServiceGenerateAllowPolicyParams) {
    return {
      principalId: "user",
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: "execute-api:Invoke",
            Effect: "Allow",
            Resource: resource,
          },
        ],
        context: {},
      },
    };
  }

  /**
   * @public
   * @returns
   */
  generateDenyPolicy() {
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
        context: {},
      },
    };
  }
}
