import { AdvanceSegment } from './advance';
import { AmenitiesSegment } from './amenities';
import { BathroomsSegment } from './bathrooms';
import { BedroomsSegment } from './bedrooms';
import { CheckInSegment } from './checkin';
import { DescriptionSegment } from './description';
import { GetStartedSegment } from './getstarted';
import { LocationSegment } from './location';
import { PhoneSegment } from './phone';
import { RequirementsCreate } from './create.requirements';
import { RoomCreate } from './create.room';
import { RulesCreate } from './create.rules';
import { SpacesCreate } from './create.spaces';
import { TitleSegment } from './title';
import { PeriodSegment } from './period';
import { PriceSegment } from './price';
import { ScenariosCreate } from './create.scenarios';
import { PhotosSegment } from './photos';

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
    getstarted: <GetStartedSegment />,
    room: <RoomCreate {...props} />,
    bedrooms: <BedroomsSegment />,
    bathrooms: <BathroomsSegment />,
    location: <LocationSegment />,
    amenities: <AmenitiesSegment {...props} />,
    spaces: <SpacesCreate {...props} />,
    description: <DescriptionSegment />,
    title: <TitleSegment />,
    phone: <PhoneSegment />,
    requirements: <RequirementsCreate {...props} />,
    rules: <RulesCreate {...props} />,
    checkin: <CheckInSegment />,
    advance: <AdvanceSegment {...props} />,
    period: <PeriodSegment />,
    price: <PriceCreate {...props} />,
    scenarios: <ScenariosCreate {...props} />,
    photos: <PhotosSegment />,
  };
  return <div data-testid={`${variant}-segment`}>{variants[variant]}</div>;
};
