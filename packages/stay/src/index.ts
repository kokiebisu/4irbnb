import { createDatabase } from "@nextbnb/database";
import { StayController } from "./controllers";

export const handler = async (event: any, context: any, callback: any) => {
  const events: { readonly GetStay: () => Promise<void> } = {
    GetStay: async () =>
      await new StayController({
        db: createDatabase({ region: "us-east-1" }),
        idValidator: ({}) => {
          return true;
        },
      }).get({ event, context, callback }),
  };
  events[event.name as "GetStay"];
};
