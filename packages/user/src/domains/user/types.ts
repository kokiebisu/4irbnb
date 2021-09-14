import { UniqueIdentifier } from "@4irbnb/common";
import { Email, FullName } from "./fields";

export interface IEntityProps {
  fullName: FullName;
  email: Email;
}

export interface IEntity extends IEntityProps {
  id: UniqueIdentifier;
}
