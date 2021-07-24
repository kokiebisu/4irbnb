import { StayService } from "../services/class";
import {
  IControllerDelete,
  IControllerGet,
  IControllerPatch,
  IControllerPost,
  IResponse,
} from "./type";

export class StayController {
  #service: StayService;
  constructor(service: StayService) {
    this.#service = service;
  }
  async get({ id }: IControllerGet): Promise<IResponse> {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const stay = await this.#service.get({ id });
      return {
        headers,
        statusCode: 200,
        body: stay,
      };
    } catch (error) {
      console.error(`[@stay:makeGetComment:getStay]`);
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message,
        },
      };
    }
  }

  async post({ data }: IControllerPost): Promise<IResponse> {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const stay = await this.#service.post({ data });
      return {
        headers,
        statusCode: 200,
        body: stay,
      };
    } catch (error) {
      console.error(`[@stay#postStayResponse/postStay]`);
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message,
        },
      };
    }
  }

  async delete({ id }: IControllerDelete): Promise<IResponse> {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const stay = await this.#service.delete({ id });
      return {
        headers,
        statusCode: 200,
        body: stay,
      };
    } catch (error) {
      console.error(`[@stay#deleteStayResponse/deleteStay]`);
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message,
        },
      };
    }
  }

  async patch({ id, data }: IControllerPatch): Promise<IResponse> {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const stay = await this.#service.patch({ id, data });
      return {
        headers,
        statusCode: 200,
        body: stay,
      };
    } catch (error) {
      console.error(`[@stay#patchStayResponse/patchStay]`);
      return {
        headers,
        statusCode: 400,
        body: {
          error: error.message,
        },
      };
    }
  }
}
