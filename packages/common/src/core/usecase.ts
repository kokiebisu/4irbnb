/**
 * @public
 */
export interface IBaseUseCase<ICommand, IResponse> {
  execute(command: ICommand): IResponse;
}
