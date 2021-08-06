import { IRegion } from "../../types";
import { BrokerService } from "./class";
import { SQSClient } from "./sqs";

export const createBrokerService = ({ region }: IRegion) =>
  new BrokerService({ client: new SQSClient({ region }) });
