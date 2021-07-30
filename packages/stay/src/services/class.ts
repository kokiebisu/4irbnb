import { createStay, isStay } from "../models";
import {
  IStayServiceDelete,
  IStayServiceGet,
  IStayServicePost,
  IStayService,
  IStayServiceConstructorParams,
} from "./types";
import { IDatabaseService } from "@nextbnb/database";
import {
  createLogger,
  ILoggerService,
  PackageEnum,
  InternalError,
} from "@nextbnb/common";

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
        throw new InternalError({
          location: "get:idValidator",
          message: "Must be a valid id",
        });
      }
      const stay = await this.#db.findOne({
        tableName: this.#tableName,
        identifier,
      });
      const { imgUrls } = stay;

      if (isStay(stay)) {
        throw new InternalError({
          location: "get:isStay",
          message: "Did find matching id",
        });
      }
      return {
        ...stay,
        imgUrls: Array.from(imgUrls),
      };
    } catch (error) {
      if (error instanceof InternalError) {
        const { location, message } = error;
        this.#logger.error({
          location,
          message,
        });
      } else {
        this.#logger.error({
          location: "get:findOne",
          message: error as string,
        });
      }
    }
  }

  async post({ data }: IStayServicePost) {
    try {
      const stay = createStay(data);
      const exists = await this.#db.findOne({
        tableName: this.#tableName,
        identifier: {
          stayId: data.id,
        },
      });
      console.log("exists", exists);
      if (exists) {
        return exists;
      }
      console.log("insert");
      await this.#db.insert({
        tableName: this.#tableName,
        data: {
          stayId: {
            S: stay.id,
          },
          title: {
            S: stay.title,
          },
          imgUrls: {
            SS: stay.imgUrls,
          },
        },
      });
      console.log("inserted");
    } catch (error) {
      this.#logger.error({
        location: "post",
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
