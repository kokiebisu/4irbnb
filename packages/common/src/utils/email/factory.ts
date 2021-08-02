import { EmailService } from "./class";
import { SendGridClient } from "./sendgrid";

/**
 * @public
 * @returns
 */
export const createEmailService = () =>
  new EmailService({ client: new SendGridClient() });
