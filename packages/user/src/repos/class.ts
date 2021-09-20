import { Identifier } from "@4irbnb/common";
import { Client, ClientConfig } from "pg";
import { Fields } from "../domains";
import { Mapper } from "../mapper";
import { IRepository } from "./types";

export class Repository implements IRepository {
  #client: Client;
  public constructor(dbConfig: ClientConfig) {
    this.#client = new Client(dbConfig);
  }

  public async openConnection() {
    try {
      if (this.#client) {
        await this.#client.connect();
      }
    } catch (err: any) {
      console.error("connection error", err.stack);
    }
  }

  public async closeConnection() {
    try {
      await this.#client.end();
    } catch (err: any) {
      console.error("error during disconnection", err.stack);
    }
  }

  public async findById(id: Identifier) {
    // await this.initialize();
    const query = {
      name: "fetch-user-by-id",
      text: `SELECT * FROM "user" WHERE id = $1`,
      values: [parseInt(id.toString())],
    };
    try {
      const res = await this.#client.query(query);
      console.debug("ID", res);
      // await this.close();
      const data = res.rows[0];
      return Mapper.convertToEntityFromRaw(data);
    } catch (err) {
      console.error("CATCH", err);
      return null;
    }
  }

  public async findByEmail(email: Fields.Email) {
    // await this.initialize();
    const query = {
      name: "fetch-user-by-email",
      text: `SELECT * FROM "user" WHERE email = $1`,
      values: [email.getValue()],
    };
    try {
      const res = await this.#client.query(query);
      // await this.close();
      const data = res.rows[0];
      return Mapper.convertToEntityFromRaw(data);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  public async save() {}

  public async delete() {}
}
