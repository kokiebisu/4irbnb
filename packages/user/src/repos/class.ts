import { Identifier, InternalError } from "@4irbnb/common";
import { Pool, PoolConfig } from "pg";
import { Entity, Fields } from "../domains";
import { Mapper } from "../mapper";
import { IRepository } from "./types";
import { RDSClient, DescribeDBInstancesCommand } from "@aws-sdk/client-rds";
import { DB_INSTANCE_IDENTIFIER } from "../config";
import { ManagerService } from "@4irbnb/manager";

export class Repository implements IRepository {
  #dbPool: Pool;
  #dbClient: any;
  public constructor(dbConfig: PoolConfig) {
    this.#dbPool = new Pool(dbConfig);
  }

  public static async initialize() {
    const rdsClient = new RDSClient({ region: "us-east-1" });

    try {
      const { DBInstances } = await rdsClient.send(
        new DescribeDBInstancesCommand({
          DBInstanceIdentifier: DB_INSTANCE_IDENTIFIER,
        })
      );
      if (!DBInstances) {
        throw new InternalError({
          location: "initialize:{!DBClusters}",
          message: "DBClusters not fetched",
        });
      }
      const targetInstance = DBInstances.find(
        (instance: any) =>
          instance.DBInstanceIdentifier === DB_INSTANCE_IDENTIFIER
      );

      if (!targetInstance) {
        throw new InternalError({
          location: "initialize:{!targetInstance}",
          message: "targetInstance not fetched",
        });
      }

      const host = targetInstance.Endpoint?.Address;
      const port = targetInstance.Endpoint?.Port;

      const manager = ManagerService.initialize({
        serviceName: "user",
        region: "us-east-1",
      });
      const user = await manager.get({ key: "dbUsername" });
      if (!user) {
        throw new InternalError({
          location: "initialize:{!dbUsername}",
          message: "dbUsername not fetched",
        });
      }
      const password = await manager.get({ key: "dbPassword" });
      if (!password) {
        throw new InternalError({
          location: "initialize:{!dbPassword}",
          message: "dbPassword not fetched",
        });
      }

      const dbConfig = {
        host,
        port,
        user,
        password,
      };

      return new Repository(dbConfig);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  public async openConnection() {
    if (!this.#dbClient) {
      this.#dbClient = await this.#dbPool.connect();
    }
  }

  public async closeConnection() {
    if (!this.#dbClient) {
      await this.#dbClient.release();
    }
  }

  public async findById(id: Identifier) {
    await this.openConnection();
    try {
      await this.#dbClient.query("BEGIN");
      const query = {
        name: "fetch-user-by-id",
        text: `SELECT * FROM "user" WHERE id = $1`,
        values: [parseInt(id.toString())],
      };
      const res = await this.#dbClient.query(query);
      await this.#dbClient.query("COMMIT");
      const data = res.rows[0];
      return Mapper.convertToEntityFromRaw(data);
    } catch (err) {
      console.log("ERROR", err);
      await this.#dbClient.query("ROLLBACK");
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  public async findByEmail(email: Fields.Email) {
    await this.openConnection();
    try {
      await this.#dbClient.query("BEGIN");
      const query = {
        name: "fetch-user-by-email",
        text: `SELECT * FROM "user" WHERE email = $1`,
        values: [email.getValue()],
      };
      const res = await this.#dbClient.query(query);
      await this.#dbClient.query("COMMIT");
      const data = res.rows[0];
      return Mapper.convertToEntityFromRaw(data);
    } catch (err) {
      await this.#dbClient.query("ROLLBACK");
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  public async save(entity: Entity) {
    await this.openConnection();
    try {
      await this.#dbClient.query("BEGIN");
      const raw = Mapper.convertToRaw(entity);
      const query = {
        name: "save-user",
        text: `INSERT INTO "user" (email, first_name, last_name) VALUES ($1, $2, $3) RETURNING *`,
        values: [raw.email, raw.first_name, raw.last_name],
      };
      const res = await this.#dbClient.query(query);
      await this.#dbClient.query("COMMIT");
      return res.rows[0];
    } catch (err) {
      await this.#dbClient.query("ROLLBACK");
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  public async delete(entity: Entity) {
    await this.openConnection();
    try {
      await this.#dbClient.query("BEGIN");
      const raw = Mapper.convertToRaw(entity);
      const query = {
        name: "delete-user",
        text: `DELETE * FROM "user" WHERE id = $1 RETURNING *`,
        values: [raw.id],
      };
      const res = await this.#dbClient.query(query);
      await this.#dbClient.query("COMMIT");
      console.log("RESULT DELETE", res);
    } catch (err) {
      await this.#dbClient.query("ROLLBACK");
      throw err;
    } finally {
      await this.closeConnection();
    }
  }

  public async findNextIdentifier() {
    await this.openConnection();
    try {
      await this.#dbClient.query("BEGIN");
      const query = {
        name: "find-next-identifier",
        text: `SELECT nextval(pg_get_serial_sequence('user', 'id')) as new_id;`,
      };
      const res = await this.#dbClient.query(query);
      await this.#dbClient.query("COMMIT");
      return res.rows[0].new_id;
    } catch (err) {
      await this.#dbClient.query("ROLLBACK");
      throw err;
    } finally {
      await this.closeConnection();
    }
  }
}
