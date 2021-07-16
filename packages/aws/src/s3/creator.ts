import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSServiceCreator } from "../class";
import { S3 } from "./class";

/**
 * @public
 * Blueprint of the class which creates the SSM instance
 */
export class S3Creator extends AWSServiceCreator {
  create(serviceName: ServiceEnum, region: TRegion, environment: TEnvironment) {
    return new S3(serviceName, region, environment);
  }
}
