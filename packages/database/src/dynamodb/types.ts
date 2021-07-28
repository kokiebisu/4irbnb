import { IRegion } from "@nextbnb/common";

export interface ICreateDynamoDB extends IRegion {}

export interface IDynamoDBConstructorParams extends IRegion {}

export interface IDynamoDBFindOneParams extends IWithIdentifierParams {}

export interface IWithIdentifierParams {
  identifier: string;
}
