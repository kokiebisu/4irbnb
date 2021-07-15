import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSServiceCreator } from "../class";
import { STS } from "./class";

/**
 * @public
 * Blueprint of the class which creates the STS instance
 */
export class STSCreator extends AWSServiceCreator {
  create(serviceName: ServiceEnum, region: TRegion, environment: TEnvironment) {
    return new STS(serviceName, region, environment);
  }
}
