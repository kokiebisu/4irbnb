import { IStayRepo } from "./types";

export class StayRepo implements IStayRepo {
  #db: IDatabaseService;

  constructor(db: IDatabaseService) {
    this.#db = db;
  }

  async exists() {
    this.#db.findOne();
  }
}
