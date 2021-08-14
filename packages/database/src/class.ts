import { PackageEnum } from "../enum";
import { createLoggerService, ILoggerService } from "../utils";
import {
  IDatabaseClient,
  IDatabaseService,
  IDatabaseServiceCreateProps,
  IDatabaseServiceDeleteProps,
  IDatabaseServiceUpdateProps,
  IDatabaseServiceConstructorProps,
} from "./types";

/**
 * @public
 */
export abstract class DatabaseService<T> implements IDatabaseService {
  #client: IDatabaseClient<T>;
  #logger: ILoggerService;

  /**
   * @public
   * @param param0
   */
  constructor({ client }: IDatabaseServiceConstructorProps<T>) {
    this.#client = client;
    this.#logger = createLoggerService({
      packageName: PackageEnum.common,
      className: `DatabaseService`,
    });
  }

  /**
   * @public
   * @param param0
   */
  async findById({ tableName, id }: IDatabaseServiceUpdateProps) {
    try {
      await this.#client.find({ tableName, id });
    } catch (error) {
      this.#logger.error({
        location: "findById:find",
        message: error as string,
      });
    }
  }

  /**
   * @public
   * @param param0
   */
  async create({ tableName, data }: IDatabaseServiceCreateProps) {
    try {
      await this.#client.create({ tableName, data });
    } catch (error) {
      this.#logger.error({
        location: "insert:insert",
        message: error as string,
      });
    }
  }

  /**
   * @public
   * @param param0
   */
  async delete({ tableName, id }: IDatabaseServiceDeleteProps) {
    try {
      await this.#client.delete({ tableName, id });
    } catch (error) {
      this.#logger.error({
        location: "delete:delete",
        message: error as string,
      });
    }
  }

  /**
   * @public
   * @param param0
   */
  async update({ tableName, id, data }: IDatabaseServiceUpdateProps) {
    try {
      await this.#client.update({ tableName, id, data });
    } catch (error) {
      this.#logger.error({
        location: "update:update",
        message: error as string,
      });
    }
  }
}
