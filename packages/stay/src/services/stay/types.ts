import { StayTypes } from "../domains";

export interface IService {
  exists(stay: StayTypes.IEntityProps): boolean;
}
