import { createStay } from "../models";
import {
  IStayServiceDelete,
  IStayServiceGet,
  IStayServicePatch,
  IStayServicePost,
  IStayService,
  IStayServiceConstructorParams,
} from "./type";
import { IDatabaseService } from "@nextbnb/database";

export class StayService implements IStayService {
  #db: IDatabaseService;
  #idValidator: any;
  constructor({ db, idValidator }: IStayServiceConstructorParams) {
    this.#db = db;
    this.#idValidator = idValidator;
  }

  async get({ identifier }: IStayServiceGet) {
    try {
      if (this.#idValidator(id)) {
        throw new Error("Must be a valid id");
      }
    } catch (error) {
      console.error(`[@stay:get:idEvaluator]: ${error}`);
    }
    try {
      const stay = await this.#db.findOne({ identifier: id });
      if (!stay) {
        throw new Error("Did find matching id");
      }
      return stay;
    } catch (error) {
      console.error(`[@stay:get:#db.findOne]: ${error}`);
    }
  }

  async post({ data }: IStayServicePost) {
    const stay = createStay(data);
    const exists = await this.#db.findOne({ identifier });
    if (exists) {
      return exists;
    }

    return this.#db.insert({
      id: stay.id,
      title: stay.title,
      imgUrls: stay.imgUrls,
    });
  }

  async delete({ id }: IStayServiceDelete) {
    if (this.#idValidator(id)) {
      throw new Error("Must be a valid id");
    }

    const stay = await this.#db.findOne({ id });

    if (!stay) {
      return null;
    }

    return this.#db.delete(id);
  }

  async patch({ id, data }: IStayServicePatch) {
    if (this.#idValidator(id)) {
      throw new Error("Must be a valid id");
    }

    const stay = await this.#db.findOne({ id });
    if (!stay) {
      throw new Error("Not found");
    }
    const newStay = createStay({
      ...stay,
      ...data,
    });

    return await this.#db.update({
      id: newStay.id,
      title: newStay.title,
      imgUrls: newStay.imgUrls,
    });
  }
}
