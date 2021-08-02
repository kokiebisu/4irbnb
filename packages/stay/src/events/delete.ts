import { ILambdaArgs } from "@nextbnb/common";
import { createStayController } from "../controllers/factory";

/**
 * Handles the 'GetStay' event
 * @param param0
 */
export const registerDeleteStay = async ({ event }: ILambdaArgs) => {
  if (event.eventName === "DeleteStay") {
    const controller = createStayController();
    return await controller.delete({
      identifier: event.payload.identifier,
    });
  }
};
