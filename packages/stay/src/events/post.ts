import { ILambdaArgs } from "@nextbnb/common";
import { createDatabase } from "@nextbnb/database";
import { StayController } from "../controllers";

/**
 * Handlers the 'PostStay' event
 * @param param0
 */
export const registerPostStay = async ({ event, callback }: ILambdaArgs) => {
  if (event.eventName === "PostStay") {
    const response = await new StayController({
      db: createDatabase({ region: "us-east-1" }),
      idValidator: ({}) => {
        return true;
      },
    }).post({ data: event.payload.data });

    callback(null, response);
  }
};
