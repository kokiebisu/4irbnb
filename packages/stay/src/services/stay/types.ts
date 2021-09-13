import { Types as DomainTypes } from "../../domains/stay";

export interface IService {
  exists(stay: DomainTypes.IEntityProps): boolean;
}
