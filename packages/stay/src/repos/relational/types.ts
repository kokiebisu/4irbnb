import { IRepo, UniqueIdentifier } from "@4irbnb/common";
import { IRelationalDatabaseService } from "@4irbnb/database";
import { IStay, Stay } from "..";

export interface IStayRepo extends IRepo<Stay> {
  // getStayById(stayId: number): Promise<Stay>;
  // getAllStayByCountry(country: string): Promise<Stay[]>;
  // getStayOwnedByHostId(hostId: string): Promise<Stay[]>;
  save(stay: IStay): void;
  find(id: UniqueIdentifier): IStay;
  exists(id: UniqueIdentifier): boolean;
}

export interface IStayRepoConstructorProps {
  db: IRelationalDatabaseService;
}
