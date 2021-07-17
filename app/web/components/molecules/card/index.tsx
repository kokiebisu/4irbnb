import { AnywhereCardProps } from "./card-anywhere";
import { ArrangementsCardProps } from "./card-arrangements";
import { AvailableCardProps } from "./card-available";
import { CategoryCardProps } from "./card-category";
import { CheckInCardProps } from "./card-checkin";
import { CollectionCardProps } from "./card-collection";
import { HorizontalCardProps } from "./card-horizontal";
import { HostCardProps } from "./card-host";
import { HostingCardProps } from "./card-hosting";
import { HowCardProps } from "./card-how";
import { NearbyCardProps } from "./card-nearby";
import { OnlineCardProps } from "./card-online";
import { ParticipateCardProps } from "./card-participate";
import { ReviewCardProps } from "./card-review";
import { SetCardProps } from "./card-set";
import { SharingCardProps } from "./card-sharing";
import { StartingCardProps } from "./card-starting";
import { StayCardProps } from "./card-stay";
import { TypeStayCardProps } from "./card-typestay";
import { VerticalCardProps } from "./card-vertical";
import { VideoCardProps } from "./card-video";
import { WorksCardProps } from "./card-works";
import { factory } from "./utils/factory";

export const $Card = {
  CATEGORY: "category",
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
  TYPESTAY: "typestay",
  ARRANGEMENTS: "arrangements",
  CHECKIN: "checkin",
  REVIEW: "review",
  STAY: "stay",
  NEARBY: "nearby",
  ONLINE: "online",
  PARTICIPATE: "participate",
  AVAILABLE: "available",
  HOST: "host",
  SET: "set",
  AGAIN: "again",
  WORKS: "works",
  SHARING: "sharing",
  HOW: "how",
  ANYWHERE: "anywhere",
  HOSTING: "hosting",
  VIDEO: "video",
  STARTING: "starting",
  COLLECTION: "collection",
};

export type CardProps =
  | { variant: "again" }
  | ({ variant: "anywhere" } & AnywhereCardProps)
  | ({ variant: "arrangements" } & ArrangementsCardProps)
  | ({ variant: "available" } & AvailableCardProps)
  | ({ variant: "category" } & CategoryCardProps)
  | ({ variant: "checkin" } & CheckInCardProps)
  | ({ variant: "collection" } & CollectionCardProps)
  | ({ variant: "horizontal" } & HorizontalCardProps)
  | ({ variant: "host" } & HostCardProps)
  | ({ variant: "hosting" } & HostingCardProps)
  | ({ variant: "how" } & HowCardProps)
  | ({ variant: "nearby" } & NearbyCardProps)
  | ({ variant: "online" } & OnlineCardProps)
  | ({ variant: "participate" } & ParticipateCardProps)
  | ({ variant: "review" } & ReviewCardProps)
  | ({ variant: "set" } & SetCardProps)
  | ({ variant: "sharing" } & SharingCardProps)
  | ({ variant: "starting" } & StartingCardProps)
  | ({ variant: "stay" } & StayCardProps)
  | ({ variant: "typestay" } & TypeStayCardProps)
  | ({ variant: "vertical" } & VerticalCardProps)
  | ({ variant: "video" } & VideoCardProps)
  | ({ variant: "works" } & WorksCardProps);

/**
 * Bundles the card components
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} variant - Specifies the variant of card component
 * @param {string} to - Redirects to the path when clicked
 */
export const Card: React.FC<CardProps> = ({ ...props }) => {
  return factory(props);
};
