import { ILambdaArgs } from "@nextbnb/common";
import { createStayController } from "../controllers/factory";

/**
 * @public
 * Handles the 'GetStay' event
 * @param param0
 */
export const registerGetStay = async ({ event }: ILambdaArgs) => {
  const controller = createStayController();
  if (event.eventName === "GetStay") {
    return await controller.get({
      identifier: event.payload.identifier,
    });
  }
};
