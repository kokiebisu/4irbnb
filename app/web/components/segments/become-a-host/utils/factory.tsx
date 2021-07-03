import React from 'react';
import { AdvanceSegment } from '../advance';
import { AmenitiesSegment } from '../amenities';
import { BathroomsSegment } from '../bathrooms';
import { BedroomsSegment } from '../bedrooms';
import { BookingScenariosSegment } from '../booking-scenarios';
import { CheckInSegment } from '../checkin';
import { DescriptionSegment } from '../description';
import { GetStartedSegment } from '../getstarted';
import { LocationSegment } from '../location';
import { PeriodSegment } from '../period';
import { PhoneSegment } from '../phone';
import { PhotosSegment } from '../photos';
import { PriceSegment } from '../price';
import { RequirementsSegment } from '../requirements';
import { RoomSegment } from '../room';
import { RulesSegment } from '../rules';
import { SpacesSegment } from '../spaces';
import { TitleSegment } from '../title';

export const factory = (props) => {
  switch (props.variant) {
    case 'advance':
      return <AdvanceSegment {...props} />;
    case 'amenities':
      return <AmenitiesSegment {...props} />;
    case 'bathrooms':
      return <BathroomsSegment {...props} />;
    case 'bedrooms':
      return <BedroomsSegment {...props} />;
    case 'bookingScenarios':
      return <BookingScenariosSegment {...props} />;
    case 'checkin':
      return <CheckInSegment {...props} />;
    case 'description':
      return <DescriptionSegment {...props} />;
    case 'getstarted':
      return <GetStartedSegment {...props} />;
    case 'location':
      return <LocationSegment {...props} />;
    case 'period':
      return <PeriodSegment {...props} />;
    case 'phone':
      return <PhoneSegment {...props} />;
    case 'photos':
      return <PhotosSegment {...props} />;
    case 'price':
      return <PriceSegment {...props} />;
    case 'requirements':
      return <RequirementsSegment {...props} />;
    case 'room':
      return <RoomSegment {...props} />;
    case 'rules':
      return <RulesSegment {...props} />;
    case 'spaces':
      return <SpacesSegment {...props} />;
    case 'title':
      return <TitleSegment {...props} />;
    default:
      throw new Error(`[SEGMENT ERROR] Invalid variant provided`);
  }
};
