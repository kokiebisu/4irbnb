import { IBaseUseCase } from "@4irbnb/common";
import { RegisterCommand } from "../../commands";

export interface IUseCase extends IBaseUseCase<RegisterCommand, void> {}
