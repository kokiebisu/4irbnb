import { LoggerUtils } from "@4irbnb/common";
import { StayController } from ".";
import { PACKAGE_NAME } from "./config";

export const handler = async (event: any) => {
  const controller = StayController.initialize();
  const logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: "",
  });
  console.log(controller);
  logger.log({ location: "handler", message: "Entered handler..." });
  try {
    switch (event.requestContext.resourceId) {
      //   case "GET /stay/{id}":
      //     logger.log({
      //       location: "handler",
      //       message: "Entered GET /stay/{id}...",
      //     });
      //     return await controller.get({
      //       identifier: {
      //         id: event.pathParameters.id,
      //       },
      //     });
      default:
        throw new Error(
          `Unsupported route: "${event.requestContext.resourceId}"`
        );
    }
  } catch (error: any) {
    logger.error({ location: "handler", message: error.message });
    return {
      statusCode: 400,
      "Content-Type": "application/json",
      body: error.message as string,
    };
  }
};
