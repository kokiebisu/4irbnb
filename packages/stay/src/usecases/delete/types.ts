import { IBaseUseCase } from "@4irbnb/common";
import { DeleteCommand } from "../../commands";

export interface IUseCase extends IBaseUseCase<DeleteCommand, void> {}
