/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { AdvanceCreate } from "./web/create.advance";
import { AmenitiesCreate } from "./web/create.amenities";
import { BathroomsCreate } from "./web/create.bathrooms";
import { BedroomsCreate } from "./web/create.bedrooms";
import { CheckInCreate } from "./web/create.checkin";
import { DescriptionCreate } from "./web/create.description";
import { GetStartedCreate } from "./web/create.getstarted";
import { LocationCreate } from "./web/create.location";
import { PhoneCreate } from "./web/create.phone";
import { RequirementsCreate } from "./web/create.requirements";
import { RoomCreate } from "./web/create.room";
import { RulesCreate } from "./web/create.rules";
import { SpacesCreate } from "./web/create.spaces";
import { TitleCreate } from "./web/create.title";
import { PeriodCreate } from "./web/create.period";
import { PriceCreate } from "./web/create.price";
import { ScenariosCreate } from "./web/create.scenarios";
import { PhotosCreate } from "./web/create.photos";

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
