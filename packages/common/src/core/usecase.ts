export interface UseCase<IArg, IResponse> {
  execute(request?: IArg): IResponse;
}
