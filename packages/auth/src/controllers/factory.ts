import { createAuthService } from "../services";
import { AuthController } from "./class";

export const createAuthController = () =>
  new AuthController({ service: createAuthService() });
