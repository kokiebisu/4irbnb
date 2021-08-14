import { Repo } from "@4irbnb/common";
import { Stay } from "..";

export interface IStayRepo extends Repo<Stay> {
  getStayById(stayId: string): Promise<Stay>;
  getAllStayByCountry(country: string): Promise<Stay[]>;
  getStayOwnedByHostId(hostId: string): Promise<Stay[]>;
}
