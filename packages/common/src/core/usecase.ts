/**
 * @public
 */
export interface IUseCase<ICommand, IResponse> {
  execute(command: ICommand): IResponse;
}
