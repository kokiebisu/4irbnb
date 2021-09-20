import { IBaseFactory } from "@4irbnb/common";
import { Entity } from "../domains";
import { IEntityProps } from "../domains/types";

export interface IFactory extends IBaseFactory<IEntityProps, Entity> {}
