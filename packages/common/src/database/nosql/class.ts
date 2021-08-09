import { DatabaseService } from "../class";
import {
  INoSqlDatabaseClient,
  INoSqlDatabaseService,
  INoSqlDatabaseServiceConstructorParams,
  INoSqlDatabaseServiceFindByIdParams,
  INoSqlDatabaseServiceFindByKeyParams,
  INoSqlDatabaseServiceFindByRangeParams,
} from "./types";

export class NoSqlDatabaseService
  extends DatabaseService
  implements INoSqlDatabaseService {
  #client: INoSqlDatabaseClient;
  constructor({ client }: INoSqlDatabaseServiceConstructorParams) {
    super({ client, databaseType: "Relational" });
    this.#client = client;
  }

  /**
   * @public
   */
  async findById({ id }: INoSqlDatabaseServiceFindByIdParams) {
    return this.#client.get({ id });
  }

  /**
   * @public
   */
  async findByRange({
    attribute,
    range,
  }: INoSqlDatabaseServiceFindByRangeParams) {
    return this.#client.query({ attribute, range });
  }

  /**
   * @public
   */
  async findByKey({ attributes }: INoSqlDatabaseServiceFindByKeyParams) {
    return this.#client.get({ attributes });
  }
}
