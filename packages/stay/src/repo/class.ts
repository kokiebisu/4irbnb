import { INoSqlDatabaseService, NoSqlDatabaseService } from "@4irbnb/database";
import { IStayRepo, IStayRepoConstructorProps } from "./types";

export class StayRepo implements IStayRepo {
  #db: INoSqlDatabaseService;

  private constructor({ db }: IStayRepoConstructorProps) {
    this.#db = db;
  }

  public static create() {
    return new StayRepo(NoSqlDatabaseService.create({ region: "us-east-1" }));
  }

  public async getStayById() {}

  public async getAllStayByCountry() {}

  public async getStayOwnedByHostId() {}

  async exists() {
    this.#db.findOne();
  }
}
