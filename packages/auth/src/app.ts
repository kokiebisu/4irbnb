import { createLoggerService, PackageEnum } from "@nextbnb/common";
import { createAuthController } from "./controllers/factory";

export const handler = async (event: any) => {
  const controller = createAuthController();
  const logger = createLoggerService({
    packageName: PackageEnum.auth,
    className: "registerVerify",
  });

  const token = event.authorizationToken.replace("Bearer ", "");
  if (!token) {
    return null;
  }

  try {
    await controller.authorize({ authorizationToken: "" });
  } catch (error) {
    logger.error({ location: "authorize", message: error as string });
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      policy: "POLICY HERE",
    }),
  };
};
