import { Server } from "@nextbnb/base";
import { ServiceEnum, EnvironmentEnum } from "@nextbnb/common";
import { registerRoutes } from "./routes";
import { createSSMService } from "@nextbnb/aws";

async function main() {
  let server: Server;
  if (process.env.environment === EnvironmentEnum.prod) {
    server = new Server(ServiceEnum.Auth, EnvironmentEnum.prod, 4000);
  } else {
    server = new Server(ServiceEnum.Auth, EnvironmentEnum.dev, 4000);
  }

  await server.configure();

  const client = createSSMService(ServiceEnum.Auth, "us-east-1", "development");
  try {
    const response = await client.setServiceSecret(
      "MyStringParameter",
      "random value"
    );
    console.log("RESPONSE", response);
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
