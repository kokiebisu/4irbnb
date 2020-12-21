import React from "react";

/** components */
import { AdvanceCreate } from "@create/create.advance";
import { AmenitiesCreate } from "@create/create.amenities";
import { BathroomsCreate } from "@create/create.bathrooms";
import { BedroomsCreate } from "@create/create.bedrooms";
import { CheckInCreate } from "@create/create.checkin";
import { DescriptionCreate } from "@create/create.description";
import { GetStartedCreate } from "@create/create.getstarted";
import { LocationCreate } from "@create/create.location";
import { PhoneCreate } from "@create/create.phone";
import { RequirementsCreate } from "@create/create.requirements";
import { RoomCreate } from "@create/create.room";
import { RulesCreate } from "@create/create.rules";
import { SpacesCreate } from "@create/create.spaces";
import { TitleCreate } from "@create/create.title";
import { PeriodCreate } from "@create/create.period";
import { PriceCreate } from "./create.price";

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
    period: <PeriodCreate {...props} />,
    price: <PriceCreate {...props} />,
  };
  return <div data-testid={`${variant}-create`}>{variants[variant]}</div>;
};
