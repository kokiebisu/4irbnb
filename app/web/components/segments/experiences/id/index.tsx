import { AvailableSegmentProps } from './available';
import { BringSegmentProps } from './bring';
import { CharacteristicsSegmentProps } from './characteristics';
import { DescriptionSegmentProps } from './description';
import { ExperiencesSegmentProps } from './experiences';
import { HostSegmentProps } from './host';
import { KnowSegmentProps } from './know';
import { ParticipateSegmentProps } from './participate';
import { PreviewSegmentProps } from './preview';
import { ReviewsSegmentProps } from './reviews';
import { factory } from './utils/factory';

export type ExperiencesSegmentVariants =
  | 'available'
  | 'bring'
  | 'characteristic'
  | 'description'
  | 'experiences'
  | 'host'
  | 'know'
  | 'participate'
  | 'preview'
  | 'reviews';

export interface SegmentProps
  extends AvailableSegmentProps,
    BringSegmentProps,
    CharacteristicsSegmentProps,
    DescriptionSegmentProps,
    ExperiencesSegmentProps,
    HostSegmentProps,
    KnowSegmentProps,
    ParticipateSegmentProps,
    PreviewSegmentProps,
    ReviewsSegmentProps {
  variant: ExperiencesSegmentVariants;
}

/**
 * Bundles the button components
 * @param {string} variant - Specifies the type of button component
 */
export const Segment: React.FC<SegmentProps> = ({ variant, ...props }) => {
  const variants = factory(props);
  return (
    <div data-testid={`${variant}-onlinehost`}>
      {variants[variant].component}
    </div>
  );
};
