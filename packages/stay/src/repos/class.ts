import { LoggerUtils } from "@4irbnb/common";
import {
  IRelationalDatabaseService,
  RelationalDatabaseService,
} from "@4irbnb/database";
import { IStayRepo, IStayRepoConstructorProps } from "./types";

export class StayRepo implements IStayRepo {
  #db: IRelationalDatabaseService;
  #logger = LoggerUtils.initialize({
    packageName: this.constructor.name,
    className: "yo",
  });

  private constructor({ db }: IStayRepoConstructorProps) {
    this.#db = db;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
  }

  public static async initialize() {
    return new StayRepo({
      db: await RelationalDatabaseService.initialize({
        region: "us-east-1",
        tableName: "Stay",
      }),
    });
  }

  public async getStayById(stayId: string) {
    try {
      return await this.#db.findByAttributes({
        attributes: {
          id: stayId,
        },
      });
    } catch (error: any) {}
  }

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

  public async create() {}

  public async update() {}

  public async delete() {}
}
