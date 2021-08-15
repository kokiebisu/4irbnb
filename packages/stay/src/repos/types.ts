import { IRepo } from "@4irbnb/common";
import { INoSqlDatabaseService } from "@4irbnb/database";
import { Stay } from "..";

export interface IStayRepo extends IRepo<Stay> {
  getStayById(stayId: string): Promise<Stay>;
  getAllStayByCountry(country: string): Promise<Stay[]>;
  getStayOwnedByHostId(hostId: string): Promise<Stay[]>;
}

export interface IStayRepoConstructorProps {
  db: INoSqlDatabaseService;
}
