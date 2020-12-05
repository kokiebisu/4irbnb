import React from "react";
import { AmenitiesCreate } from "./create.amenities";
import { BathroomsCreate } from "./create.bathrooms";
import { BedroomsCreate } from "./create.bedrooms";
import { GetStartedCreate } from "./create.getstarted";
import { LocationCreate } from "./create.location";
import { RoomCreate } from "./create.room";
import { SpacesCreate } from "./create.spaces";
import { CreateProps } from "./props";

export const Create: React.FC<CreateProps> = ({
  type = "getstarted",
  ...props
}) => {
  const types = {
    getstarted: <GetStartedCreate {...props} />,
    room: <RoomCreate {...props} />,
    bedrooms: <BedroomsCreate {...props} />,
    bathrooms: <BathroomsCreate {...props} />,
    location: <LocationCreate {...props} />,
    amenities: <AmenitiesCreate {...props} />,
    spaces: <SpacesCreate {...props} />,
  };
  return types[type];
};
