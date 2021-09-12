import { UniqueIdentifier } from "./unique";

export interface IRepository<T> {
  findById(id: UniqueIdentifier): T | null;
  save(stay: T): void;
  delete(stay: T): void;
}
