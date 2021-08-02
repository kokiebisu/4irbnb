import { EmailService } from "./class";
import { SendGridClient } from "./sendgrid";

export const createEmailService = () =>
  new EmailService({ client: new SendGridClient() });
