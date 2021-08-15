export interface IRepo<T> {
  create(args: T): Promise<void>;
  update(args: any): Promise<void>;
  delete(args: any): Promise<void>;
}
