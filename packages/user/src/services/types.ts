import { IEntityProps } from "../domains/types";

/**
 * @public Enwraps the logics for the User domain service
 * @remarks
 * Follows the rules:
 * - There should be no email address duplicates
 */
export interface IService {
  exists(user: IEntityProps): Promise<boolean>;
}
