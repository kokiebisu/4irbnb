import { Logger } from "./class";
import { ICreateLoggerParams } from "./types";
import { createWinstonLogger } from "./winston/factory";

export const createLogger = ({ packageName, className }: ICreateLoggerParams) =>
  new Logger({
    service: createWinstonLogger(),
    packageName,
    className,
  });
