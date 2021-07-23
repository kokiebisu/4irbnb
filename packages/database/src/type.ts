export interface IDatabaseService {
  insert(data: any): void;
  findOne(identifier: string): any;
  findMany(data: any): any;
}
