import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { SNS } from "./class";

/**
 *
 * @param serviceName
 * @param region
 * @param environment
 * @returns
 */
export const createSNSService = (
  serviceName: ServiceEnum,
  region: string,
  environment: TEnvironment
) => new SNS(serviceName, region, environment);
