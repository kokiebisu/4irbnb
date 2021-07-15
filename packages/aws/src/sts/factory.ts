import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { STS } from "./class";

export const createSTS = (
  serviceName: ServiceEnum,
  region: TRegion,
  environment: TEnvironment
) => new STS(serviceName, region, environment);
