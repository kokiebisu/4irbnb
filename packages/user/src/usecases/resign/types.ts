import { IBaseUseCase } from "@4irbnb/common";
import { ResignCommand } from "../../commands";

export interface IUseCase extends IBaseUseCase<ResignCommand, void> {}
