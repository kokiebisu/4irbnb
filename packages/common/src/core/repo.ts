import { Identifier } from "./unique";

/**
 * @public Represents the base methods included in a Repository class
 */
export interface IBaseRepository<T> {
  openConnection(): Promise<void>;
  closeConnection(): Promise<void>;
  findById(id: Identifier): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(entity: T): Promise<T>;
}
