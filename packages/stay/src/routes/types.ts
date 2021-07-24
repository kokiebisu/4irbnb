import { IServer } from "@nextbnb/common";
import { StayController } from "../controllers";

/**
 * @public
 */
export interface IRegisterRoutesParams {
  server: IServer;
}

/**
 * @public
 */
export interface IRegisterRouteParams {
  server: IServer;
  handler: StayController;
}
