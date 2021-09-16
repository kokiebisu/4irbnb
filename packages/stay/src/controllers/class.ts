import { LoggerUtils, ILoggerUtils } from "@4irbnb/common";
import {
  CreateCommand,
  DeleteCommand,
  FindByIdCommand,
  UpdateCommand,
} from "../commands";
import { PACKAGE_NAME } from "../config";
import { RepositoryTypes } from "../repos";
import { ServiceTypes } from "../services";
import {
  CreateUseCase,
  DeleteUseCase,
  FindByIdUseCase,
  ICreateUseCase,
  IDeleteUseCase,
  IFindByIdUseCase,
  IUpdateUseCase,
  UpdateUseCase,
} from "../usecases";

/**
 * @public
 */
export class StayController {
  #create: ICreateUseCase;
  #delete: IDeleteUseCase;
  #findById: IFindByIdUseCase;
  #update: IUpdateUseCase;
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  public constructor(
    repo: RepositoryTypes.IRepository,
    service: ServiceTypes.IService
  ) {
    // this.#service = StayService.initialize();
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized...",
    });
    this.#create = new CreateUseCase(repo, service);
    this.#delete = new DeleteUseCase(repo, service);
    this.#findById = new FindByIdUseCase(repo, service);
    this.#update = new UpdateUseCase(repo, service);
  }

  public post(event: any) {
    if (!event.title) {
      throw new Error("Title property not found");
    }
    const command = new CreateCommand(event.title);
    this.#create.execute(command);
  }

  public delete(event: any) {
    if (!event.id) {
      throw new Error("id property not found");
    }
    const command = new DeleteCommand(event.id);
    this.#delete.execute(command);
  }

  public get(event: any) {
    if (!event.id) {
      throw new Error("id property not found");
    }
    const command = new FindByIdCommand(event.id);
    this.#findById.execute(command);
  }

  public put(event: any) {
    if (!event.id) {
      throw new Error("id property not found");
    }
    if (!event.title) {
      throw new Error("Title property not found");
    }
    const command = new UpdateCommand(event.id, event.title);
    this.#update.execute(command);
  }
}
