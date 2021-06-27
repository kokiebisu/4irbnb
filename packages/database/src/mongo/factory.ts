import { DBClient } from './class';
import { IMongo } from './type';

/**
 * Factory function to create the Mongoose Client instance
 * @param args
 * @returns
 */
export const createDB = (args: IMongo): => {
  return new DBClient(args);
};
