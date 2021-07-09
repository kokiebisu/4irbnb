import { Logger } from '@nextbnb/utils';
import { IMongoConstructor } from '.';
// import { Service } from '@nextbnb/common';

export class MongoClient {
  #logger: Logger;
  // #service: Service; to be used
  #package: any;

  constructor({
    environment,
    providedPackage,
    serviceName,
  }: IMongoConstructor) {
    this.#logger = new Logger({
      service: serviceName,
      environment,
      level: 'info',
    });
    // this.#service = serviceName;
    this.#package = providedPackage;
  }

  async setup() {
    try {
      // this.#logger.output('info', {
      //   level: 'info',
      //   message: `Initializing connection to MongoDB using URI ${sanitizedUri}`,
      // });

      const uri = `temporary value`;

      await this.#package.connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      this.#logger.output('Successfully connected to MongoDB');
    } catch (err) {
      this.#logger.output(err);
    }
  }
}
