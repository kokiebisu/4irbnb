/** components */
import { AdvanceCreate } from "@prototype/create/create.advance";
import { AmenitiesCreate } from "@prototype/create/create.amenities";
import { BathroomsCreate } from "@prototype/create/create.bathrooms";
import { BedroomsCreate } from "@prototype/create/create.bedrooms";
import { CheckInCreate } from "@prototype/create/create.checkin";
import { DescriptionCreate } from "@prototype/create/create.description";
import { GetStartedCreate } from "@prototype/create/create.getstarted";
import { LocationCreate } from "@prototype/create/create.location";
import { PhoneCreate } from "@prototype/create/create.phone";
import { RequirementsCreate } from "@prototype/create/create.requirements";
import { RoomCreate } from "@prototype/create/create.room";
import { RulesCreate } from "@prototype/create/create.rules";
import { SpacesCreate } from "@prototype/create/create.spaces";
import { TitleCreate } from "@prototype/create/create.title";
import { PeriodCreate } from "@prototype/create/create.period";
import { PriceCreate } from "./create.price";
import { ScenariosCreate } from "./create.scenarios";
import { PhotosCreate } from "./create.photos";

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
    scenarios: <ScenariosCreate {...props} />,
    photos: <PhotosCreate {...props} />,
  };
  return <div data-testid={`${variant}-create`}>{variants[variant]}</div>;
};
