import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSServiceCreator } from "../class";
import { Publisher } from "./sns-publisher/class";
import { Subscriber } from "./sns-subscriber/class";

/**
 * @public
 * Blueprint of the class which creates the SSM instance
 */
export class SSMCreator extends AWSServiceCreator {
  create(
    serviceName: ServiceEnum,
    region: TRegion,
    environment: TEnvironment,
    variant: "publisher" | "subscriber"
  ) {
    if (variant === "publisher") {
      return new Publisher(serviceName, region, environment);
    } else {
      return new Subscriber(serviceName, region, environment);
    }
  }
}
