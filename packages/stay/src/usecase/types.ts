import { CreateCommand, DeleteCommand, UpdateCommand } from "../commands";

export interface IUseCase {
  create(command: CreateCommand): void;
  update(command: UpdateCommand): void;
  delete(command: DeleteCommand): void;
}
