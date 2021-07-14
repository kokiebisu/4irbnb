import { ServiceEnum, TEnvironment } from "@nextbnb/common";
import { SNSSubscriber } from "./class";

export const createSnsSubscriber = (
  serviceName: ServiceEnum,
  region: string,
  environment: TEnvironment,
  topicName: string
) => new SNSSubscriber(serviceName, region, environment, topicName);
