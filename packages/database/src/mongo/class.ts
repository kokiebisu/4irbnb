import { Logger } from "@nextbnb/utils";
import { IMongoConstructor } from ".";
import { IDatabaseService } from "../type";
// import { Service } from '@nextbnb/common';

export class MongoClient implements IDatabaseService {
  #logger: Logger;
  // #service: Service; to be used
  #package: any;

  constructor({
    environment,
    providedPackage,
    serviceName,
  }: IMongoConstructor) {
    this.#logger = new Logger(serviceName, "info", "1111", environment);
    // this.#service = serviceName;
    this.#package = providedPackage;
  }

  async setup() {
    try {
      const uri = `temporary value`;

      await this.#package.connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      this.#logger.output("Successfully connected to MongoDB");
    } catch (err) {
      this.#logger.output(err as string);
    }
  }

  insert() {}

  findOne() {}

  findMany() {}
}
