import {
  createServer,
  ServiceEnum,
  EnvironmentEnum,
  IServer,
} from "@nextbnb/common";
import { registerRoutes } from "./routes";

async function main() {
  let server: IServer;

  if (process.env.environment === EnvironmentEnum.prod) {
    server = createServer({
      serviceName: ServiceEnum.Auth,
      environment: EnvironmentEnum.prod,
    });
  } else {
    server = createServer({
      serviceName: ServiceEnum.Auth,
      environment: EnvironmentEnum.dev,
    });
  }

  await server.setup();

  registerRoutes({ server });

  await server.listen({ port: 4000 });
}

main()
  .then()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
