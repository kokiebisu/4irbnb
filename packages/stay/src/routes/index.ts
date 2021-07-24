import { StayController } from "../controllers";
import { createDatabase } from "@nextbnb/database";
import { registerGetRoute } from "./get";
import { IRegisterRoutesParams } from "./types";

export const registerRoutes = ({ server }: IRegisterRoutesParams) => {
  const handler = new StayController({
    db: createDatabase({ region: "us-east-1" }),
  });
  registerGetRoute({ server, handler });
};
