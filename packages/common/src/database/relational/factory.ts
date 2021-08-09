import { RelationalDatabaseService } from ".";
import { IRegion } from "../..";
import { RDSClient } from "./rds";

export const createRelationDatabaseService = ({ region }: IRegion) =>
  new RelationalDatabaseService({ client: new RDSClient({ region }) });
