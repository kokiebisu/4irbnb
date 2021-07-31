import { ILambdaArgs } from "@nextbnb/common";
import { createDatabase } from "@nextbnb/database";
import { StayController } from "../controllers";

/**
 * Handles the 'GetStay' event
 * @param param0
 */
export const registerDeleteStay = async ({ event, callback }: ILambdaArgs) => {
  if (event.eventName === "DeleteStay") {
    const response = await new StayController({
      db: createDatabase({ region: "us-east-1" }),
      idValidator: ({}) => {
        return true;
      },
    }).delete({ identifier: event.payload.identifier });

    callback(null, response);
  }
};
