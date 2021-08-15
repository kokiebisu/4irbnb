import { LoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "./configs";
import { StayController } from "./controllers";

export const handler = async (event: any) => {
  const controller = StayController.initialize();
  const logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: "",
  });
  logger.log({ location: "handler", message: "Entered handler..." });
  console.log("EVENT", event);
  try {
    switch (event.requestContext.resourceId) {
      case "GET /s/homes":
        console.log("EVENT", event);
        logger.log({
          location: "handler",
          message: "Entered GET /stay/{id}...",
        });
        return await controller.getStaysByCategory();
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
      body: error,
    };
  }
};
