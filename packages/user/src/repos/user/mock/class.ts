import { IRepository } from "../types";

export class MockRepository implements IRepository {
  private constructor() {}

  public initialize() {}

  public async findById(id: string) {
    throw new Error("Logic not implemented yet");
  }

  public async findByEmail(email: string) {
    throw new Error("Logic not implemented yet");
  }

  public async save() {
    throw new Error("Logic not implemented yet");
  }

  public async delete() {
    throw new Error("Logic not implemented yet");
  }
}
