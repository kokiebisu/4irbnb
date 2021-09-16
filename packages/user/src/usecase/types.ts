import { CreateCommand, DeleteCommand, UpdateCommand } from "../commands";

export interface IUseCase {
  create(command: CreateCommand): Promise<void>;
  update(command: UpdateCommand): Promise<void>;
  delete(command: DeleteCommand): Promise<void>;
}
