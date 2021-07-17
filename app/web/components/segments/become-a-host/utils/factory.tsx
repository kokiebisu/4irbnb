import React from "react";
import { BecomeAHostSegmentProps } from "..";
import { AdvanceSegment } from "../advance";
import { AmenitiesSegment } from "../amenities";
import { BathroomsSegment } from "../bathrooms";
import { BedroomsSegment } from "../bedrooms";
import { BookingScenariosSegment } from "../booking-scenarios";
import { CheckInSegment } from "../checkin";
import { DescriptionSegment } from "../description";
import { GetStartedSegment } from "../getstarted";
import { LocationSegment } from "../location";
import { PeriodSegment } from "../period";
import { PhoneSegment } from "../phone";
import { PhotosSegment } from "../photos";
import { PriceSegment } from "../price";
import { RequirementsSegment } from "../requirements";
import { RoomSegment } from "../room";
import { RulesSegment } from "../rules";
import { SpacesSegment } from "../spaces";
import { TitleSegment } from "../title";

export const factory = (props: BecomeAHostSegmentProps) => {
  const variant = props.variant;
  switch (props.variant) {
    case "advance":
      return <AdvanceSegment />;
    case "amenities":
      return <AmenitiesSegment />;
    case "bathrooms":
      return <BathroomsSegment />;
    case "bedrooms":
      return <BedroomsSegment />;
    case "booking-scenarios":
      return <BookingScenariosSegment />;
    case "checkin":
      return <CheckInSegment />;
    case "description":
      return <DescriptionSegment />;
    case "getstarted":
      return <GetStartedSegment />;
    case "location":
      return <LocationSegment />;
    case "period":
      return <PeriodSegment />;
    case "phone":
      return <PhoneSegment />;
    case "photos":
      return <PhotosSegment />;
    case "price":
      return <PriceSegment />;
    case "requirements":
      return <RequirementsSegment />;
    case "room":
      return <RoomSegment />;
    case "rules":
      return <RulesSegment />;
    case "spaces":
      return <SpacesSegment />;
    case "title":
      return <TitleSegment />;
    default:
      throw new Error(
        `[/become-a-host SEGMENT ERROR] Invalid variant ${variant} provided`
      );
  }
};
