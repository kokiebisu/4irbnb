import { IStayRepo } from "../repos/types";

export interface PStayUseCase {
  repo: IStayRepo;
  idValidator(): boolean;
}
