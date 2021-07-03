/**
 * Blueprint that implements the AuthService
 */
class AuthService {
  #db: any;

  /**
   * Dependency Injection to enable switching databases in the future
   * @param database
   */
  constructor(database: any) {
    this.#db = database;
  }

  async login(username: string, password: string) {
    // tries to find the user in the database
    // if there is not user then throw error
    // if there is, return user
    console.log(
      `Use ${username}, ${password} to log into ${this.#db as string} database`
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      firstName: 'John',
      lastName: 'Park',
      email: 'john@gmail.com',
    };
  }
}

/**
 * @public
 * Factory function which instantiates the AuthService
 *
 * @param database
 * @returns an instance of type {@link @nextbnb/auth#AuthService}
 */
export const createAuthService = (database: any) => {
  return new AuthService(database);
};
