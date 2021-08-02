import { createDatabase } from "@nextbnb/database";
import { StayController } from "./class";

/**
 * @public
 * Creates the Stay Controller
 * @returns
 */
export const createStayController = () =>
  new StayController({
    db: createDatabase({ region: "us-east-1" }),
    idValidator: ({}) => {
      return true;
    },
  });
