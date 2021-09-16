import { IBaseUseCase } from "@4irbnb/common";
import { CreateCommand } from "../../commands";

export interface IUseCase extends IBaseUseCase<CreateCommand, void> {}
