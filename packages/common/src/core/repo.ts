import { Identifier } from "./unique";

/**
 * @public Represents the base methods included in a Repository class
 */
export interface IBaseRepository<T> {
  findById(id: Identifier): Promise<T | null>;
  save(entity: T): Promise<void>;
  delete(entity: T): Promise<void>;
}
