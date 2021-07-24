import { createStay } from "../models";
import {
  IServiceDelete,
  IServiceGet,
  IServicePatch,
  IServicePost,
  IStayService,
} from "./type";

export class StayService implements IStayService {
  #db: IDatabaseService;
  #idEvaluator: any;
  constructor({ db, idEvaluator }: IStayServiceConstructorParams) {
    this.#db = db;
    this.#idEvaluator = idEvaluator;
  }

  async get({ id }: IServiceGet) {
    try {
      if (this.#idEvaluator(id)) {
        throw new Error("Must be a valid id");
      }
    } catch (error) {
      console.error(`[@stay:get:idEvaluator]: ${error}`);
    }
    try {
      const stay = await this.#db.findOne();
      if (!stay) {
        throw new Error("Did find matching id");
      }
      return stay;
    } catch (error) {
      console.error(`[@stay:get:#db.findOne]: ${error}`);
    }
  }

  async post({ data }: IServicePost) {
    const stay = createStay(data);
    const exists = await this.#db.findOne();
    if (exists) {
      return exists;
    }

    return this.#db.insert({
      id: stay.id,
      title: stay.title,
      imgUrls: stay.imgUrls,
    });
  }

  async delete({ id }: IServiceDelete) {
    if (this.#idEvaluator(id)) {
      throw new Error("Must be a valid id");
    }

    const stay = await this.#db.findOne({ id });

    if (!stay) {
      return null;
    }

    return this.#db.delete(id);
  }

  async patch({ id, data }: IServicePatch) {
    if (this.#idEvaluator(id)) {
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
