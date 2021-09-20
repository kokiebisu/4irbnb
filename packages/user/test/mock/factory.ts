import { UniqueIdentifier } from "@4irbnb/common";
import { IFactory } from "../../src/factory/types";

import { Entity } from "../../src/domains";
import { IEntityProps } from "../../src/domains/types";

export class Factory implements IFactory {
  #id: number;
  public constructor() {
    this.#id = 0;
  }
  public create(props: IEntityProps) {
    const newId = ++this.#id;
    return new Entity(new UniqueIdentifier(newId.toString()), props);
  }
}
