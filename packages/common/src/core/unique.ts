import { v4 as uuid } from "uuid";

import { Identifier } from "./id";

export class UniqueIdentifier extends Identifier<string> {
  constructor() {
    super(uuid());
  }
}
