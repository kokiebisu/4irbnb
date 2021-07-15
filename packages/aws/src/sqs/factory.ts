import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { SQS } from "./class";

export const createSQSService = (
  serviceName: ServiceEnum,
  region: TRegion,
  environment: TEnvironment
) => new SQS(serviceName, region, environment);
