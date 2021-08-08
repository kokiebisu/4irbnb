import { createLoggerService, PackageEnum } from "@4irbnb/common";
import { createAuthController } from "./controllers/factory";

/**
 * @public
 * Handler for the Lambda authorizer
 * @param event
 * @returns
 */
export const handler = async (event: any) => {
  const controller = createAuthController();
  const logger = createLoggerService({
    packageName: PackageEnum.auth,
    className: "registerVerify",
  });
  logger.log({ location: "handler", message: "Entered handler..." });
  console.log("EVENT", event);

  return await controller.authorize({
    authorization: event.headers.authorization,
    resource: event.routeArn,
  });
};
