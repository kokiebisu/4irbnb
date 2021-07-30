import { createStay } from "../models";
import {
  IStayServiceDelete,
  IStayServiceGet,
  IStayServicePost,
  IStayService,
  IStayServiceConstructorParams,
} from "./types";
import { IDatabaseService } from "@nextbnb/database";
import { createLogger, ILoggerService, PackageEnum } from "@nextbnb/common";

export class StayService implements IStayService {
  #db: IDatabaseService;
  #idValidator: any;
  #tableName: string;
  #logger: ILoggerService;
  constructor({ db, idValidator }: IStayServiceConstructorParams) {
    this.#db = db;
    this.#idValidator = idValidator;
    this.#tableName = "StayService";
    this.#logger = createLogger({
      packageName: PackageEnum.stay,
      className: "StayService",
    });
  }

  async get({ identifier }: IStayServiceGet) {
    try {
      if (!this.#idValidator({ identifier })) {
        throw new Error("Must be a valid id");
      }
      const stay = await this.#db.findOne({
        identifier,
        tableName: "StayService",
      });
      console.log("STAY", stay);
      if (!stay) {
        throw new Error("Did find matching id");
      }
      return stay;
    } catch (error) {
      this.#logger.error({
        location: "get:idValidator",
        message: error as string,
      });
    }
  }

  async post({ data }: IStayServicePost) {
    const stay = createStay(data);
    try {
      const exists = await this.#db.findOne({
        identifier: data.primary_key.id,
        tableName: this.#tableName,
      });
      if (exists) {
        return exists;
      }
    } catch (error) {
      this.#logger.error({
        location: "post:findOne",
        message: error as string,
      });
    }

    try {
      return await this.#db.insert({
        tableName: this.#tableName,
        data: { id: stay.id, title: stay.title, imgUrls: stay.imgUrls },
      });
    } catch (error) {
      this.#logger.error({
        location: "post:insert",
        message: error as string,
      });
    }
  }

  async delete({ identifier }: IStayServiceDelete) {
    try {
      if (this.#idValidator({ identifier })) {
        throw new Error("Must be a valid id");
      }
    } catch (error) {
      this.#logger.error({
        location: "delete:idValidator",
        message: error as string,
      });
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
      this.#logger.error({
        location: "delete:findOne",
        message: error as string,
      });
    }
  }

  // async patch({ identifier, data }: IStayServicePatch) {
  //   try {
  //     if (this.#idValidator({ identifier })) {
  //       throw new Error("Must be a valid id");
  //     }
  //   } catch (error) {
  //     this.#logger.error({
  //       location: "patch:idValidator",
  //       message: error as string,
  //     });
  //   }

  //   let stay;

  //   try {
  //     stay = await this.#db.findOne({
  //       identifier,
  //       tableName: this.#tableName,
  //     });
  //     if (!stay) {
  //       throw new Error("Not found");
  //     }
  //   } catch (error) {
  //     this.#logger.error({
  //       location: "patch:findOne",
  //       message: error as string,
  //     });
  //   }
  //   const newStay = createStay({
  //     ...stay,
  //     ...data,
  //   });

  //   try {
  //     return await this.#db.update({
  //       id: newStay.id,
  //       title: newStay.title,
  //       imgUrls: newStay.imgUrls,
  //     });
  //   } catch (error) {
  //     this.#logger.error({
  //       location: "patch:update",
  //       message: error as string,
  //     });
  //   }
  // }
}
