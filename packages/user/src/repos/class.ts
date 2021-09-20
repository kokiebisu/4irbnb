import { Identifier } from "@4irbnb/common";
import { Client } from "pg";
import { IRepository } from "./types";

export class Repository implements IRepository {
  #client: Client;
  public constructor() {
    this.#client = new Client({
      host: "database-1.cmkyxohdorvf.us-east-1.rds.amazonaws.com",
      port: 5432,
      user: "postgres",
      password: "testadmin",
    });
  }

  private async initialize() {
    try {
      if (this.#client) {
        await this.#client.connect();
        console.debug("connected");
      }
    } catch (err: any) {
      console.debug("connection error", err.stack);
    }
  }

  private async close() {
    try {
      await this.#client.end();
      console.debug("disconnected");
    } catch (err: any) {
      console.debug("error during disconnection", err.stack);
    }
  }

  public async findById(id: Identifier) {
    await this.#client.connect();
    /**
     * Logic to find id
     */
    await this.#client.end();
    return null;
  }

  public async findByEmail() {
    this.initialize();
    return null;
  }

  public async save() {}

  public async delete() {}
}
