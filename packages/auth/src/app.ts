import { LoggerUtils } from "@4irbnb/common";
import { PACKAGE_NAME } from ".";
import { createAuthController } from "./controllers/factory";

/**
 * @public
 * Handler for the Lambda authorizer
 * @param event
 * @returns
 */
export const handler = async (event: any) => {
  const controller = createAuthController();
  const logger = LoggerUtils.create({
    packageName: PACKAGE_NAME,
    className: "handler",
  });
  logger.log({ location: "handler", message: "Entered handler..." });
  console.log("EVENT", event);

  return await controller.authorize({
    authorization: event.headers.authorization,
    resource: event.routeArn,
  });
};
