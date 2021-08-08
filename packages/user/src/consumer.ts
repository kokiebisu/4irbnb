import { createLoggerService, PackageEnum } from "@nextbnb/common";
import { UserController } from ".";

export const handler = async (event: any) => {
  const controller = new UserController({ region: "us-east-1" });
  const logger = createLoggerService({
    packageName: PackageEnum.stay,
    className: "",
  });
  logger.log({ location: "handler", message: "Entered handler..." });
  console.log(controller, event);
};
