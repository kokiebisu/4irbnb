export class StayService {
  #db: IDatabase;
  constructor(db) {
    this.#db = db;
  }
}
