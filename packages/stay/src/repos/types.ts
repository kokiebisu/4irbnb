import { UniqueIdentifier } from "@4irbnb/common";
import { Title } from "../domains/fields";
import { IStay } from "../domains/types";

export interface IRepository {
  findById(id: UniqueIdentifier): IStay | null;
  findByTitle(title: Title): IStay | null;
  save(stay: IStay): void;
  delete(stay: IStay): void;
}
