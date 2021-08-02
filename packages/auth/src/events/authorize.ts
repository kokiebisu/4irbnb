import { createLogger, PackageEnum } from "@nextbnb/common";
import { createAuthController } from "../controllers/factory";
import { ILambdaArgs } from "./types";

export const registerAuthorize = async ({ event }: ILambdaArgs) => {
  const controller = createAuthController();
  const logger = createLogger({
    packageName: PackageEnum.auth,
    className: "registerVerify",
  });

  const token = event.authorizationToken.replace("Bearer ", "");
  if (!token) {
    return null;
  }

  try {
    return await controller.authorize({ authorizationToken: "" });
  } catch (error) {
    logger.error({ location: "authorize", message: error as string });
  }
};
