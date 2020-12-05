import React from "react";

/** components */
import { AmenitiesCreate } from "./create.amenities";
import { BathroomsCreate } from "./create.bathrooms";
import { BedroomsCreate } from "./create.bedrooms";
import { DescriptionCreate } from "./create.description";
import { GetStartedCreate } from "./create.getstarted";
import { LocationCreate } from "./create.location";
import { PhoneCreate } from "./create.phone";
import { RoomCreate } from "./create.room";
import { SpacesCreate } from "./create.spaces";
import { TitleCreate } from "./create.title";

/** props */
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
    description: <DescriptionCreate {...props} />,
    title: <TitleCreate {...props} />,
    phone: <PhoneCreate {...props} />,
  };
  return types[type];
};
