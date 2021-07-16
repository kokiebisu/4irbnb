import { Server } from "@nextbnb/base";
import { ServiceEnum, EnvironmentEnum } from "@nextbnb/common";
import { registerRoutes } from "./routes";
import {
  createAWSService,
  // createSNSPublisherService,
  // createSnsSubscriberService,
  // SSMCreator,
  STS,
  STSCreator,
} from "@nextbnb/aws";

async function main() {
  let server: Server;
  if (process.env.environment === EnvironmentEnum.prod) {
    server = new Server(ServiceEnum.Auth, EnvironmentEnum.prod, 4000);
  } else {
    server = new Server(ServiceEnum.Auth, EnvironmentEnum.dev, 4000);
  }

  await server.configure();

  // const publisher = createSNSPublisherService(
  //   ServiceEnum.Auth,
  //   "us-east-1",
  //   "development"
  // );
  // const subscriber = createSnsSubscriberService(
  //   ServiceEnum.Auth,
  //   "us-east-1",
  //   "development"
  // );
  try {
    const client = createAWSService(
      new STSCreator(),
      ServiceEnum.Auth,
      "us-east-1",
      "development",
      null
    ) as STS;
    const info = await client.getCallerInfo();
    console.log("INFO", info);
    // await publisher.registerTopic("topic");
    // await subscriber.registerSubscription("topic");
    // console.log("EN2");
    // await publisher.publish(
    //   JSON.stringify({
    //     message: "HELLO WORLD!",
    //   })
    // );
  } catch (err) {
    console.log("EEE", err);
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
