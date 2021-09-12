import { LoggerUtils } from "@4irbnb/common";
import {
  IRelationalDatabaseService,
  RelationalDatabaseService,
} from "@4irbnb/database";
import { PACKAGE_NAME } from "../../configs";
import { StayMapper } from "../../mapper";
import { IStayRepo, IStayRepoConstructorProps } from "./types";

/**
 * @public Enwraps the logics for persisting the {@link @stay#Stay} domain object and recreating the domain object from the datastore under the dev environment
 */
export class Repository {
  #db: IRelationalDatabaseService;
  #logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  private constructor({ db }: IStayRepoConstructorProps) {
    this.#db = db;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }

  public static async initialize() {
    return new Repository({
      db: await RelationalDatabaseService.initialize({
        region: "us-east-1",
        tableName: "Stay",
      }),
    });
  }

  // public async getStayById(stayId: number) {
  //   try {
  //     const data = await this.#db.findByAttributes({
  //       attributes: {
  //         id: stayId,
  //       },
  //     });
  //     return data;

  //     // return StayMapper.convertToPersistence(data);
  //   } catch (error: any) {}
  // }

  // public async getAllStayByCountry(country: string) {
  //   return await this.#db.findByKey({
  //     tableName: this.#tableName,
  //     attributes: { country },
  //   });
  // }

  // public async getStayOwnedByHostId(hostId: string) {
  //   return await this.#db.findByKey({
  //     tableName: this.#tableName,
  //     attributes: { hostId },
  //   });
  // }

  // public async exists(stayId: string) {
  //   const stay = await this.#db.findById({
  //     tableName: this.#tableName,
  //     id: stayId,
  //   });
  //   return !!stay;
  // }

  public save(user: IUser) {}

  public find() {}

  public exists() {}
}
