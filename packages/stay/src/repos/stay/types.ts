import { IBaseRepository } from "@4irbnb/common";
import { Entity, Fields } from "../../domains/stay";

export interface IRepository extends IBaseRepository<Entity> {
  findByTitle(title: Fields.Title): Promise<Entity | null>;
}
