import { AlertService } from "./class";
import { SlackClient } from "./slack";

export const createAlertService = () =>
  new AlertService({ client: new SlackClient() });
