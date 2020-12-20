import React from "react";

/** components */
import { AdvanceCreate } from "./create.advance";
import { AmenitiesCreate } from "./create.amenities";
import { BathroomsCreate } from "./create.bathrooms";
import { BedroomsCreate } from "./create.bedrooms";
import { CheckInCreate } from "./create.checkin";
import { DescriptionCreate } from "./create.description";
import { GetStartedCreate } from "./create.getstarted";
import { LocationCreate } from "./create.location";
import { PhoneCreate } from "./create.phone";
import { RequirementsCreate } from "./create.requirements";
import { RoomCreate } from "./create.room";
import { RulesCreate } from "./create.rules";
import { SpacesCreate } from "./create.spaces";
import { TitleCreate } from "./create.title";

export interface CreateProps {
  variant?: string;
  [property: string]: any;
}

export const Create: React.FC<CreateProps> = ({
  variant = "getstarted",
  ...props
}) => {
  const variants = {
    getstarted: <GetStartedCreate {...props} />,
    room: <RoomCreate {...props} />,
    bedrooms: <BedroomsCreate {...props} />,
    bathrooms: <BathroomsCreate {...props} />,
    location: <LocationCreate {...props} />,
    amenities: <AmenitiesCreate {...props} />,
    spaces: <SpacesCreate {...props} />,
    description: <DescriptionCreate {...props} />,
    title: <TitleCreate {...props} />,
    phone: <PhoneCreate {...props} />,
    requirements: <RequirementsCreate {...props} />,
    rules: <RulesCreate {...props} />,
    checkin: <CheckInCreate {...props} />,
    advance: <AdvanceCreate {...props} />,
  };
  return <div data-testid={`${variant}-create`}>{variants[variant]}</div>;
};
