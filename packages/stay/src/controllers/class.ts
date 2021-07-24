import { StayService } from "../services/class";
import { IStayService } from "../services/type";
import {
  IStayControllerDeleteParams,
  IStayControllerGetParams,
  IStayControllerPatchParams,
  IStayControllerPostParams,
  IResponse,
  IStayControllerConstructorParams,
} from "./type";

export class StayController {
  #service: IStayService;
  constructor({ db, idValidator }: IStayControllerConstructorParams) {
    this.#service = new StayService({ db, idValidator });
  }
  async get({ identifier }: IStayControllerGetParams): Promise<IResponse> {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const stay = await this.#service.get({ identifier });
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
          error,
        },
      };
    }
  }

  async post({ data }: IStayControllerPostParams): Promise<IResponse> {
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
          error,
        },
      };
    }
  }

  async delete({
    identifier,
  }: IStayControllerDeleteParams): Promise<IResponse> {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const stay = await this.#service.delete({ identifier });
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
          error,
        },
      };
    }
  }

  async patch({
    identifier,
    data,
  }: IStayControllerPatchParams): Promise<IResponse> {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const stay = await this.#service.patch({ identifier, data });
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
          error,
        },
      };
    }
  }
}
