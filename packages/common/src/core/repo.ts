import { UniqueIdentifier } from "./unique";

/**
 * @public Represents the base methods included in a Repository class
 */
export interface IRepository<T> {
  findById(id: UniqueIdentifier): Promise<T | null>;
  save(stay: T): Promise<void>;
  delete(stay: T): Promise<void>;
}
