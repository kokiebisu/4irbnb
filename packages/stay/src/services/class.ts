import { createStay, isStay, IStay } from "../models";
import {
  IStayServiceDelete,
  IStayServiceGet,
  IStayServicePost,
  IStayService,
  IStayServiceConstructorParams,
  IStayServicePatch,
} from "./types";
import {
  IDatabaseService,
  createLoggerService,
  ILoggerService,
  PackageEnum,
  InternalError,
} from "@4irbnb/common";

export class StayService implements IStayService {
  #db: IDatabaseService;
  #idValidator: any;
  #tableName: string;
  #logger: ILoggerService;
  constructor({ db, idValidator }: IStayServiceConstructorParams) {
    this.#db = db;
    this.#idValidator = idValidator;
    this.#tableName = "StayService";
    this.#logger = createLoggerService({
      packageName: PackageEnum.stay,
      className: "StayService",
    });
  }

  /**
   * Retrieves the stay based on the provided id
   * @param param0
   * @returns
   */
  async get({ identifier }: IStayServiceGet): Promise<IStay | null> {
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

      if (!stay) {
        return null;
      }

      if (!isStay(stay)) {
        throw new InternalError({
          location: "get:isStay",
          message: "Not a valid stay was retrieved",
        });
      }
      return { ...stay, imgUrls: Array.from(stay.imgUrls) };
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
      return null;
    }
  }

  /**
   * Inserts the provided data
   * @param param0
   * @returns
   */
  async post({ data }: IStayServicePost) {
    try {
      const stay = createStay(data);
      const exists = await this.#db.findOne({
        tableName: this.#tableName,
        identifier: {
          id: data.id,
        },
      });
      if (exists) {
        return exists;
      }
      await this.#db.insert({
        tableName: this.#tableName,
        data: {
          id: {
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
    } catch (error) {
      this.#logger.error({
        location: "post",
        message: error as string,
      });
    }
  }

  /**
   * Deletes data based on the provided identifies
   * @param param0
   * @returns
   */
  async delete({ identifier }: IStayServiceDelete) {
    try {
      if (!this.#idValidator({ identifier })) {
        throw new InternalError({
          location: "delete:idValidator",
          message: "Must be a valid id",
        });
      }

      const stay = await this.#db.findOne({
        identifier,
        tableName: this.#tableName,
      });

      if (!stay) {
        throw new InternalError({
          location: "delete:!stay",
          message: "Stay was empty",
        });
      }

      if (!isStay(stay)) {
        console.log(stay);
        throw new InternalError({
          location: "delete:isStay",
          message: "Stay retrieved was invalid",
        });
      }

      return this.#db.delete({ tableName: this.#tableName, identifier });
    } catch (error) {
      if (error instanceof InternalError) {
        const { location, message } = error;
        this.#logger.error({
          location,
          message,
        });
      } else {
        this.#logger.error({
          location: "delete",
          message: error as string,
        });
      }
    }
  }

  async patch({ identifier, data }: IStayServicePatch) {
    try {
      if (!this.#idValidator({ identifier })) {
        throw new InternalError({
          location: "patch:{idValidator}",
          message: "Must be a valid id",
        });
      }
      const stay = await this.#db.findOne({
        identifier,
        tableName: this.#tableName,
      });

      const newStay = createStay({
        ...stay,
        ...data,
      });
      if (!stay) {
        throw new InternalError({
          location: "patch:{stay}",
          message: "Not found",
        });
      }
      return await this.#db.update({
        tableName: this.#tableName,
        identifier,
        data: newStay,
      });
    } catch (error) {
      if (error instanceof InternalError) {
        const { location, message } = error;
        this.#logger.error({
          location,
          message,
        });
      } else {
        this.#logger.error({
          location: "patch:update",
          message: error as string,
        });
      }
    }
  }
}
