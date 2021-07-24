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
  #tableName: string;
  constructor({ db, idValidator }: IStayServiceConstructorParams) {
    this.#db = db;
    this.#idValidator = idValidator;
    this.#tableName = "StayService";
  }

  async get({ identifier }: IStayServiceGet) {
    try {
      if (this.#idValidator({ identifier })) {
        throw new Error("Must be a valid id");
      }
    } catch (error) {
      console.error(`[@stay:get:idEvaluator]: ${error}`);
    }
    try {
      const stay = await this.#db.findOne({
        identifier,
        tableName: "StayService",
      });
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
    const exists = await this.#db.findOne({
      identifier: data.primary_key.id,
      tableName: this.#tableName,
    });
    if (exists) {
      return exists;
    }

    return this.#db.insert({
      tableName: this.#tableName,
      data: { id: stay.id, title: stay.title, imgUrls: stay.imgUrls },
    });
  }

  async delete({ identifier }: IStayServiceDelete) {
    try {
      if (this.#idValidator({ identifier })) {
        throw new Error("Must be a valid id");
      }
    } catch (error) {
      console.error(`[@stay:StayService:delete:idValidator]: ${error}`);
    }

    try {
      const stay = await this.#db.findOne({
        identifier,
        tableName: this.#tableName,
      });

      if (!stay) {
        throw new Error("Cannot find by identifier");
      }

      return this.#db.delete({ identifier, tableName: this.#tableName });
    } catch (error) {
      console.log(`[@stay:StayService:delete:delete]: ${error}`);
    }
  }

  async patch({ identifier, data }: IStayServicePatch) {
    try {
      if (this.#idValidator({ identifier })) {
        throw new Error("Must be a valid id");
      }
    } catch (error) {
      console.error(`[@stay:StayService:patch:idValidator]: ${error}`);
    }

    try {
      const stay = await this.#db.findOne({
        identifier,
        tableName: this.#tableName,
      });
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
    } catch (error) {
      console.error(`[@stay:StayService:patch:update]: ${error}`);
    }
  }
}
