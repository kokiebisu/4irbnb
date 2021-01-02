/** components */

import { PanelSection } from "@section/section.panel";
import { StaySection } from "@section/section.stay";
import { CharacteristicsSection } from "@section/section.characteristics";
import { DescriptionSection } from "@section/section.description";
import { ArrangementsSection } from "@section/section.arrangements";
import { AmenitySection } from "@section/section.amenities";
import { ReviewsSection } from "@section/section.reviews";
import { HostSection } from "@section/section.host";
import { KnowSection } from "@section/section.know";
import { OtherSection } from "@section/section.other";
import { NearbySection } from "@section/section.nearby";
import { DestinationsSection } from "@section/section.destinations";
import { OnlineSection } from "@section/section.online";
import { HomesSection } from "@section/section.homes";
import { AlsoSection } from "@section/section.also";
import { ParticipateSection } from "@section/section.participate";
import { BringSection } from "@section/section.bring";
import { ExperiencesSection } from "@section/section.experiences";
import { AvailableSection } from "@section/section.available";
import { AllSection } from "@section/section.all";
import { PrioritySection } from "@section/section.priority";
import { HelpSection } from "@section/section.help";
import { ReadySection } from "@section/section.ready";
import { WorksSection } from "@section/section.works";
import { SharingSection } from "@section/section.sharing";
import { BackSection } from "@section/section.back";

export interface SectionProps {
  extendsTo?: string;
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the section components
 * @param {string} extendsTo - Add custom styling to the selected component
 * @param {string} variant - Specifies the type of section component
 */
export const Section: React.FC<SectionProps> = ({
  extendsTo,
  variant,
  ...props
}) => {
  const variants: {
    [variant: string]: JSX.Element;
  } = {
    stay: <StaySection {...props} />,
    panel: <PanelSection {...props} />,
    characteristics: <CharacteristicsSection {...props} />,
    description: <DescriptionSection {...props} />,
    arrangements: <ArrangementsSection {...props} />,
    amenities: <AmenitySection {...props} />,
    reviews: <ReviewsSection {...props} />,
    host: <HostSection {...props} />,
    know: <KnowSection {...props} />,
    other: <OtherSection {...props} />,
    nearby: <NearbySection {...props} />,
    destinations: <DestinationsSection {...props} />,
    online: <OnlineSection {...props} />,
    homes: <HomesSection {...props} />,
    also: <AlsoSection {...props} />,
    participate: <ParticipateSection {...props} />,
    bring: <BringSection {...props} />,
    experiences: <ExperiencesSection {...props} />,
    available: <AvailableSection {...props} />,
    all: <AllSection {...props} />,
    priority: <PrioritySection {...props} />,
    help: <HelpSection {...props} />,
    ready: <ReadySection {...props} />,
    works: <WorksSection {...props} />,
    sharing: <SharingSection {...props} />,
    back: <BackSection {...props} />,
  };
  return (
    <div className={extendsTo} data-testid={`${variant}-section`}>
      {variants[variant]}
    </div>
  );
};
