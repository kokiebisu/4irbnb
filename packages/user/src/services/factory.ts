import { createDatabaseService, TRegion } from "@nextbnb/common";
import { UserService } from ".";

export const createUserService = ({ region }: IFactoryParams) =>
  new UserService({
    db: createDatabaseService({ region }),
    idValidator: () => true,
  });

export interface IFactoryParams {
  region: TRegion;
}
