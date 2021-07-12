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
  region: string,
  environment: TEnvironment
) => new SSM(serviceName, region, environment);
