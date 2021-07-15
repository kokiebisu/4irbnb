import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { SNSSubscriber } from "./class";

export const createSnsSubscriberService = (
  serviceName: ServiceEnum,
  region: string,
  environment: TEnvironment
) => new SNSSubscriber(serviceName, region, environment);
