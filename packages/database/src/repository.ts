export interface Repo<T> {
  exists(args: T): Promise<boolean>;
  delete(args: T): Promise<any>;
  save(args: T): Promise<any>;
}
