import { AdvanceSegment } from './advance';
import { AmenitiesSegment } from './amenities';
import { BathroomsSegment } from './bathrooms';
import { BedroomsSegment } from './bedrooms';
import { CheckInSegment } from './checkin';
import { DescriptionCreate } from './create.description';
import { GetStartedCreate } from './create.getstarted';
import { LocationCreate } from './create.location';
import { PhoneCreate } from './create.phone';
import { RequirementsCreate } from './create.requirements';
import { RoomCreate } from './create.room';
import { RulesCreate } from './create.rules';
import { SpacesCreate } from './create.spaces';
import { TitleCreate } from './create.title';
import { PeriodCreate } from './create.period';
import { PriceCreate } from './create.price';
import { ScenariosCreate } from './create.scenarios';
import { PhotosCreate } from './create.photos';

export const $Segment = {
  GETSTARTED: 'getstarted',
  ROOM: 'room',
  BEDROOMS: 'bedrooms',
  BATHROOMS: 'bathrooms',
  LOCATION: 'location',
  AMENITIES: 'amenities',
  SPACES: 'spaces',
  DESCRIPTION: 'description',
  TITLE: 'title',
  PHONE: 'phone',
  REQUIREMENTS: 'requirements',
  RULES: 'rules',
  CHECKIN: 'checkin',
  ADVANCE: 'advance',
  PERIOD: 'period',
  PRICE: 'price',
  SCENARIOS: 'scenarios',
  PHOTOS: 'photos',
};

export interface CreateProps {
  variant?: string;
  [property: string]: any;
}

export const Segment: React.FC<CreateProps> = ({
  variant = $Segment.GETSTARTED,
  ...props
}) => {
  const variants = {
    getstarted: <GetStartedCreate {...props} />,
    room: <RoomCreate {...props} />,
    bedrooms: <BedroomsSegment />,
    bathrooms: <BathroomsSegment />,
    location: <LocationCreate {...props} />,
    amenities: <AmenitiesSegment {...props} />,
    spaces: <SpacesCreate {...props} />,
    description: <DescriptionCreate {...props} />,
    title: <TitleCreate {...props} />,
    phone: <PhoneCreate {...props} />,
    requirements: <RequirementsCreate {...props} />,
    rules: <RulesCreate {...props} />,
    checkin: <CheckInSegment />,
    advance: <AdvanceSegment {...props} />,
    period: <PeriodCreate {...props} />,
    price: <PriceCreate {...props} />,
    scenarios: <ScenariosCreate {...props} />,
    photos: <PhotosCreate {...props} />,
  };
  return <div data-testid={`${variant}-segment`}>{variants[variant]}</div>;
};
