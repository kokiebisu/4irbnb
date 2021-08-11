import { factory } from "./utils/factory";

export type BecomeAHostSegmentProps =
  | { variant: "getstarted" }
  | { variant: "room" }
  | { variant: "bedrooms" }
  | { variant: "bathrooms" }
  | { variant: "location" }
  | { variant: "amenities" }
  | { variant: "spaces" }
  | { variant: "description" }
  | { variant: "title" }
  | { variant: "phone" }
  | { variant: "requirements" }
  | { variant: "rules" }
  | { variant: "checkin" }
  | { variant: "advance" }
  | { variant: "period" }
  | { variant: "price" }
  | { variant: "booking-scenarios" }
  | { variant: "photos" };

export const Segment = ({ ...props }: BecomeAHostSegmentProps) =>
  factory(props);
