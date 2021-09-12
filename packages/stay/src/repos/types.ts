import { IRepository } from "@4irbnb/common";
import { Title } from "../domains/fields";
import { IStay } from "../domains/types";

export interface IStayRepository extends IRepository<IStay> {
  findByTitle(title: Title): IStay | null;
}
