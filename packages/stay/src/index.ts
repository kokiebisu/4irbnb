import { Server } from "@nextbnb/base";
import { ServiceEnum, EnvironmentEnum } from "@nextbnb/common";
import { registerRoutes } from "./routes";
import {
  createAWSService,
  Publisher,
  SNSCreator,
  SQS,
  SQSCreator,

  // SSMCreator,
  STS,
  STSCreator,
  Subscriber,
} from "@nextbnb/aws";

async function main() {
  let server: Server;
  if (process.env.environment === EnvironmentEnum.prod) {
    server = new Server(ServiceEnum.Auth, EnvironmentEnum.prod, 4000);
  } else {
    server = new Server(ServiceEnum.Auth, EnvironmentEnum.dev, 4000);
  }

  await server.configure();

  try {
    // await publisher.registerTopic("randomName");
    // create sqs
    // await subscriber.registerSubscription("topic");
    // console.log("EN2");
    // await publisher.publish(
    //   JSON.stringify({
    //     message: "HELLO WORLD!",
    //   })
    // );
  } catch (err) {
    throw err;
  }

  registerRoutes(server);

  await server.listen();
}

main()
  .then()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
