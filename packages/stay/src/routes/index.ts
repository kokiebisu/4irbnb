import { StayController } from "../controllers";
// import { createDatabase } from "@nextbnb/database";
import { registerGetRoute } from "./get";
import { IRegisterRoutesParams } from "./types";

export const registerRoutes = ({ server }: IRegisterRoutesParams) => {
  // {
  //   db: createDatabase({ region: "us-east-1" }),
  //   idValidator: () => true,
  // }
  const handler = new StayController();
  registerGetRoute({ server, handler });
};
