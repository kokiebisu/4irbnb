import { ServiceEnum, TEnvironment, TRegion } from "@nextbnb/common";
import { AWSServiceCreator } from "../creator";
import { Publisher } from "./sns-publisher";
import { Subscriber } from "./sns-subscriber";

/**
 * @public
 * Blueprint of the class which creates the SSM instance
 */
export class SNSCreator extends AWSServiceCreator {
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
