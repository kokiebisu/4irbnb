import { LoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "../../../config";
import { IRepository } from "../types";


/**
 * @public Enwraps the logics for persisting the {@link @stay#Stay} domain object and recreating the domain object from the datastore under the production environment
 */
export class Repository implements IRepository {
  #db: RelationalDBContext;
  #logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  private constructor(db: ) {
    this.#db = db;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }

  public static async initialize() {
    return new Repository({
      db: await RelationalDBContext.initialize({
        region: "us-east-1",
        tableName: "Stay",
      }),
    });
  }

  /**
   * @public Finds the Stay by id
   */
  public async findById() {
    throw new Error("Logic not implemented yet...");
  }

  /**
   * @public Finds the Stay by title
   */
  public async findByTitle() {
    throw new Error("Logic not implemented yet...");
  }

  /**
   * @public Saves the Stay domain object.
   */
  public async save() {
    throw new Error("Logic not implemented yet...");
  }

  /**
   * @public Deletes the Stay domain object from the datastore.
   */
  public async delete() {
    throw new Error("Logic not implemented yet...");
  }
}
