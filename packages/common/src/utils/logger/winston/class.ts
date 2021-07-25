import * as winston from "winston";
import {
  ILoggerService,
  IServiceErrorParams,
  IServiceLogParams,
} from "../types";

export class WinstonService implements ILoggerService {
  #client: winston.Logger;

  /**
   * Constructs the Logger instance
   */
  constructor() {
    this.#client = winston.createLogger({
      transports: [new winston.transports.Console()],
    });
  }

  async log({ location, message }: IServiceLogParams): Promise<void> {
    console.log("location", location);
    console.log("message", message);
    try {
      await this.#client.log("info", `[${location}]:${message}`);
    } catch (error) {
      console.error("LOG", error);
    }
  }

  async error({ location, message }: IServiceErrorParams): Promise<void> {
    await this.#client.log("error", `[${location}]:${message}`);
  }
}
