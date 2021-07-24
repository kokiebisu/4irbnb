import { IStay } from "../models";

export interface IStayService {
  get(params: IServiceGet): Promise<IStay>;
  post(params: IServicePost): Promise<void>;
  delete(params: IServiceDelete): Promise<void>;
  patch(params: IServicePatch): Promise<IStay>;
}

export interface IStayServiceConstructorParams {
  db: IDatabaseService;
  idValidator(): boolean;
}

export interface IServiceGet {
  id: string;
}

export interface IServicePost {
  data: any;
}

export interface IServiceDelete {
  id: string;
}

export interface IServicePatch {
  id: string;
  data: any;
}
