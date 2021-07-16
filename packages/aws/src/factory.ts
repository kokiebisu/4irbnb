import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSServiceCreator } from "./creator";

/**
 * Creator
 * @param creator -
 * @remarks
 * The instance must be extending from the AWSServiceCreator
 *
 * @param serviceName
 * @param region
 * @param environment
 *
 * @returns
 */
export const createAWSService = (
  creator: AWSServiceCreator,
  serviceName: ServiceEnum,
  region: TRegion,
  environment: TEnvironment,
  variant: any | null
) => {
  return creator.create(serviceName, region, environment, variant);
};
