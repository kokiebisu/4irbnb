import { LoggerService } from "./class";
import { ICreateLoggerParams } from "./types";
import { WinstonClient } from "./winston";

/**
 * @public
 * @param param0
 * @returns
 */
export const createLoggerService = ({
  packageName,
  className,
}: ICreateLoggerParams) =>
  new LoggerService({
    client: new WinstonClient(),
    packageName,
    className,
  });
