/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

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
import { PeriodCreate } from "./create.period";
import { PriceCreate } from "./create.price";
import { ScenariosCreate } from "./create.scenarios";
import { PhotosCreate } from "./create.photos";

export const $Prototype = {
  GETSTARTED: "getstarted",
  ROOM: "room",
  BEDROOMS: "bedrooms",
  BATHROOMS: "bathrooms",
  LOCATION: "location",
  AMENITIES: "amenities",
  SPACES: "spaces",
  DESCRIPTION: "description",
  TITLE: "title",
  PHONE: "phone",
  REQUIREMENTS: "requirements",
  RULES: "rules",
  CHECKIN: "checkin",
  ADVANCE: "advance",
  PERIOD: "period",
  PRICE: "price",
  SCENARIOS: "scenarios",
  PHOTOS: "photos",
};

export interface CreateProps {
  variant?: string;
  [property: string]: any;
}

export const Prototype: React.FC<CreateProps> = ({
  variant = $Prototype.GETSTARTED,
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
    scenarios: <ScenariosCreate {...props} />,
    photos: <PhotosCreate {...props} />,
  };
  return (
    <div data-testid={`${variant}-create-prototype`}>{variants[variant]}</div>
  );
};
