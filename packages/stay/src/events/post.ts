import { ILambdaArgs } from "@nextbnb/common";
import { createStayController } from "../controllers/factory";

/**
 * @public
 * Handlers the 'PostStay' event
 * @param param0
 */
export const registerPostStay = async ({ event }: ILambdaArgs) => {
  if (event.eventName === "PostStay") {
    const controller = createStayController();
    return await controller.post({ data: event.payload.data });
  }
};
