import { createLogger, PackageEnum } from "@nextbnb/common";
import { createAuthController } from "../controllers/factory";
import { ILambdaArgs } from "./types";

export const registerVerify = async ({ event }: ILambdaArgs) => {
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
    const policy = await controller.authorize({ authorizationToken: token });
    return policy;
  } catch (error) {
    logger.error({ location: "authorize", message: error as string });
  }
};
