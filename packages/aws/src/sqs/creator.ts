import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSServiceCreator } from "../creator";
import { SQS } from "./class";

/**
 * @public
 * Blueprint of the class which creates the SQS instance
 */
export class SQSCreator extends AWSServiceCreator {
  create(serviceName: ServiceEnum, region: TRegion, environment: TEnvironment) {
    return new SQS(serviceName, region, environment);
  }
}
