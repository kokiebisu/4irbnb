import { DomainTypes } from "../domains";


export interface IService {
  exists(stay: DomainTypes.IEntityProps): boolean;
}
