import { SSM } from "./class";
import { ServiceEnum, TEnvironment } from "@nextbnb/common";

/**
 *
 * @param serviceName
 * @param region
 * @param environment
 * @returns
 */
export const createSSMService = (
  serviceName: ServiceEnum,
  region: TRegion,
  environment: TEnvironment
) => new SSM(serviceName, region, environment);
