import { DatabaseService } from "../class";
import {
  IRelationalDatabaseClient,
  IRelationalDatabaseConstructorParams,
  IRelationalDatabaseService,
} from "./types";

export class RelationalDatabaseService
  extends DatabaseService
  implements IRelationalDatabaseService {
  #client: IRelationalDatabaseClient;
  constructor({ client }: IRelationalDatabaseConstructorParams) {
    super({ client, databaseType: "Relational" });
    this.#client = client;
  }

  /**
   * @public
   */
  findOneById({ id }) {}

  /**
   * @public
   */
  findOneByAttributes() {}
}
