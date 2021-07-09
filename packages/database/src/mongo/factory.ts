import { BaseError } from "@nextbnb/error";
import { MongoClient } from "./class";
import { IMongoConstructor, TDatabaseClient } from "./type";

/**
 * Factory function to create the Mongoose Client instance
 * @param args
 * @returns
 */
export const createDB = (dbType: TDatabaseClient, args: IMongoConstructor) => {
  try {
    switch (dbType) {
      case "mongo":
        return new MongoClient(args);
      default:
        throw new Error();
    }
  } catch (err) {
    throw new BaseError("Invalid database type specified", 500);
  }
};
