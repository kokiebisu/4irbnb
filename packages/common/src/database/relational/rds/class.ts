import {
  RDSDataClient as Client,
  ExecuteStatementCommand,
} from "@aws-sdk/client-rds-data";
import {
  createLoggerService,
  ILoggerService,
  InternalError,
  PackageEnum,
} from "../../..";
import {
  IRelationalDatabaseClient,
  IRelationalDatabaseClientConstructorParams,
  IRelationalDatabaseClientFindOneByIdParams,
} from "../types";

/**
 * @public
 */
export class RDSClient implements IRelationalDatabaseClient {
  #package: Client;
  #logger: ILoggerService;
  #database: string;
  #resourceArn: string;
  #secretArn: string;

  constructor({
    region,
    resourceArn,
    database,
  }: IRelationalDatabaseClientConstructorParams) {
    this.#package = new Client({ region });
    this.#logger = createLoggerService({
      packageName: PackageEnum.common,
      className: "RDSClient",
    });
    this.#database = database;
    this.#resourceArn = resourceArn;
  }

  /**
   * @public
   * Fetch the secretArn from the secrets manager
   */
  #configureClient() {}

  /**
   * @public
   * Retrieves a single data based on the provided id
   */
  async findOneById({
    tableName,
    id,
  }: IRelationalDatabaseClientFindOneByIdParams) {
    this.#configureClient();
    try {
      if (!this.#secretArn) {
        throw new InternalError({
          location: "findOneById:{!this.#secretArn}",
          message: "Secret Arn not found",
        });
      }
      const sql = `SELECT * from ${tableName} WHERE id = ${id}`;
      const data = await this.#package.send(
        new ExecuteStatementCommand({
          continueAfterTimeout: true,
          database: this.#database,
          resourceArn: this.#resourceArn,
          secretArn: this.#secretArn,
          sql,
        })
      );
      return data.records;
    } catch (error: any) {
      if (error instanceof InternalError) {
        const { location, message } = error;
        this.#logger.error({ location, message });
      } else {
        this.#logger.error({ location: "findOneById:send", message: error });
      }
    }
  }

  /**
   * @public
   * Retrieves a single data based on the provided unique identifier (etc. Email)
   */
  async findOneByIdentifier() {}

  /**
   * @public
   * Retrieves all the data that meets the provided attributes criterias
   */
  async findByAttributes() {}
}
