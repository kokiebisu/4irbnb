import { IBaseUseCase } from "@4irbnb/common";
import { FindByIdCommand } from "../../commands";

export interface IUseCase extends IBaseUseCase<FindByIdCommand, void> {}
