import { AdvanceSegment } from './advance';
import { AmenitiesSegment } from './amenities';
import { BathroomsSegment } from './bathrooms';
import { BedroomsSegment } from './bedrooms';
import { CheckInSegment } from './checkin';
import { DescriptionSegment } from './description';
import { GetStartedSegment } from './getstarted';
import { LocationSegment } from './location';
import { PhoneSegment } from './phone';
import { RequirementsSegment } from './requirements';
import { RoomSegment } from './room';
import { RulesSegment } from './rules';
import { SpacesSegment } from './spaces';
import { TitleSegment } from './title';
import { PeriodSegment } from './period';
import { PriceSegment } from './price';
import { ScenariosSegment } from './scenarios';
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
  variant: string;
}

export const Segment: React.FC<CreateProps> = ({ variant }) => {
  const variants = {
    getstarted: <GetStartedSegment />,
    room: <RoomSegment />,
    bedrooms: <BedroomsSegment />,
    bathrooms: <BathroomsSegment />,
    location: <LocationSegment />,
    amenities: <AmenitiesSegment />,
    spaces: <SpacesSegment />,
    description: <DescriptionSegment />,
    title: <TitleSegment />,
    phone: <PhoneSegment />,
    requirements: <RequirementsSegment />,
    rules: <RulesSegment />,
    checkin: <CheckInSegment />,
    advance: <AdvanceSegment />,
    period: <PeriodSegment />,
    price: <PriceSegment />,
    scenarios: <ScenariosSegment />,
    photos: <PhotosSegment />,
  };
  return <div data-testid={`${variant}-segment`}>{variants[variant]}</div>;
};
