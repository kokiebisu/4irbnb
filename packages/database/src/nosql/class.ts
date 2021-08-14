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
  async findOneById({ tableName, id }: INoSqlDatabaseServiceFindByIdParams) {
    return this.#client.get({ tableName, id });
  }

  /**
   * @public
   */
  async findByRange({
    tableName,
    attributes,
    range,
  }: INoSqlDatabaseServiceFindByRangeParams) {
    return this.#client.query({ tableName, attributes, range });
  }

  /**
   * @public
   */
  async findByKey({
    tableName,
    attributes,
  }: INoSqlDatabaseServiceFindByKeyParams) {
    return this.#client.get({ tableName, attributes });
  }

  async findById() {}
}
