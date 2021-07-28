import { LoggerService } from "./class";
import { ICreateLoggerParams } from "./types";
import { createWinstonLogger } from "./winston/factory";

export const createLogger = ({ packageName, className }: ICreateLoggerParams) =>
  new LoggerService({
    service: createWinstonLogger(),
    packageName,
    className,
  });
