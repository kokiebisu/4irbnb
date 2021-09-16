import { UniqueIdentifier } from "./unique";

/**
 * @public Represents the base methods included in a Repository class
 */
export interface IBaseRepository<T> {
  findById(id: UniqueIdentifier): Promise<T | null>;
  save(entity: T): Promise<void>;
  delete(entity: T): Promise<void>;
}
