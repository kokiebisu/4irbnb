import { IBaseUseCase } from "@4irbnb/common";
import { UpdateCommand } from "../../commands";

export interface IUseCase extends IBaseUseCase<UpdateCommand, void> {}
