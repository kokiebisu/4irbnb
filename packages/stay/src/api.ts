import { LoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from "./config";
import { createStayController } from "./controllers";

export const handler = async (event: any) => {
  const controller = createStayController();
  const logger = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: "",
  });
  logger.log({ location: "handler", message: "Entered handler..." });
  try {
    switch (event.requestContext.resourceId) {
      case "GET /stay/{id}":
        logger.log({
          location: "handler",
          message: "Entered GET /stay/{id}...",
        });
        return await controller.get({
          identifier: {
            id: event.pathParameters.id,
          },
        });
      case "DELETE /stay/{id}":
        logger.log({
          location: "handler",
          message: "Entered DELETE /stay/{id}...",
        });
        return await controller.delete({
          identifier: {
            id: event.payload.identifier,
          },
        });
      case "PUT /stays":
        logger.log({
          location: "handler",
          message: "Entered PUT /stays...",
        });
        return await controller.post({ data: JSON.parse(event.body) });
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
