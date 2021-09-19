import { LoggerUtils } from "@4irbnb/common";
import { RegisterCommand, ResignCommand, UpdateCommand } from "../commands";
import { PACKAGE_NAME } from "../config";
import { IRepository } from "../repos/types";
import { IService } from "../services/types";
import {
  IRegisterUseCase,
  IResignUseCase,
  IUpdateUseCase,
  RegisterUseCase,
  ResignUseCase,
  UpdateUseCase,
} from "../usecases";
import { IController } from "./types";

/**
 * @public
 */
export class Controller implements IController {
  #register: IRegisterUseCase;
  #resign: IResignUseCase;
  #update: IUpdateUseCase;
  #logger: LoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  private constructor(repo: IRepository, service: IService) {
    this.#register = new RegisterUseCase(repo, service);
    this.#resign = new ResignUseCase(repo, service);
    this.#update = new UpdateUseCase(repo, service);
    this.#logger.log({
      location: "controller",
      message: "Successfully initialized...",
    });
  }

  public initialize(repo: IRepository, service: IService) {
    return new Controller(repo, service);
  }

  async register(event: any) {
    const command = new RegisterCommand(
      event.firstName,
      event.lastName,
      event.email
    );
    this.#register.execute(command);
  }

  async resign(event: any) {
    const command = new ResignCommand(event.id);
    this.#resign.execute(command);
  }

  async update(event: any) {
    const command = new UpdateCommand(event.id, event.email);
    this.#update.execute(command);
  }
}
