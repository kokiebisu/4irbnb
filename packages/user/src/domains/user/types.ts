import { UniqueIdentifier } from "@4irbnb/common";
import { FullName } from "./fields";

export interface IEntityProps {
  fullName: FullName;
}

export interface IEntity extends IEntityProps {
  id: UniqueIdentifier;
}
