import { Title } from "../../domains/fields";
import { IStay } from "../../domains/types";

export class InMemoryStayRepo {
  #client: { [key: string]: any };
  private constructor() {
    this.#client = {};
  }
  public initialize() {
    return new InMemoryStayRepo();
  }
  public find(title: Title) {
    const titleInString = title.toValue();
    const result = this.#client[titleInString];
    if (!result) {
      return null;
    }
    return result;
  }
  public save(stay: IStay) {
    this.#client[stay.]
  }
}
