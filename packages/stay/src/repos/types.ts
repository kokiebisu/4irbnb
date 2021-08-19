import { IRepo } from "@4irbnb/common";
import { IRelationalDatabaseService } from "@4irbnb/database";
import { Stay } from "..";

export interface IStayRepo extends IRepo<Stay> {
  getStayById(stayId: number): Promise<Stay>;
  // getAllStayByCountry(country: string): Promise<Stay[]>;
  // getStayOwnedByHostId(hostId: string): Promise<Stay[]>;
}

export interface IStayRepoConstructorProps {
  db: IRelationalDatabaseService;
}