export interface IUseCase<C, R> {
  execute(command: C): Promise<R>;
}
