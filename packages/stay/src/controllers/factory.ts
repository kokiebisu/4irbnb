import { createDatabaseService } from "@nextbnb/common";
import { StayController } from "./class";

/**
 * @public
 * Creates the Stay Controller
 * @returns
 */
export const createStayController = () =>
  new StayController({
    db: createDatabaseService({ region: "us-east-1" }),
    idValidator: ({}) => {
      return true;
    },
  });
