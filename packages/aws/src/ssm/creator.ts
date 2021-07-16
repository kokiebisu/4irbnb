import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSServiceCreator } from "../creator";
import { SSM } from "./class";

/**
 * @public
 * Blueprint of the class which creates the SSM instance
 */
export class SSMCreator extends AWSServiceCreator {
  create(serviceName: ServiceEnum, region: TRegion, environment: TEnvironment) {
    return new SSM(serviceName, region, environment);
  }
}
