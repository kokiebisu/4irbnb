import { IRepository } from "../../src/repos/types";
import { IDataTransferObject } from "../../src/dto";
import { UniqueIdentifier } from "@4irbnb/common";
import { Mapper } from "../../src/mapper";
import { Entity } from "../../src/domains";

export class MockRepository implements IRepository {
  store: { [key: string]: IDataTransferObject };
  public constructor() {
    this.store = {};
  }

  public async findById(id: UniqueIdentifier) {
    const target = Object.values(this.store).find(
      (data) => data.id === id.toString()
    );
    if (!target) {
      return null;
    }
    return Mapper.convertToEntity(target);
  }

  public async findByEmail(email: string) {
    const target = Object.values(this.store).find(
      (data) => data.email === email
    );
    if (!target) {
      return null;
    }
    console.log("TARGET", target);
    return Mapper.convertToEntity(target);
  }

  public async save(entity: Entity) {
    const targetId = entity.id.toString();
    const dto = Mapper.convertToDTO(entity);
    this.store[targetId] = dto;
  }

  public async delete(entity: Entity) {
    const targetId = entity.id.toString();
    delete this.store[targetId];
  }
}
