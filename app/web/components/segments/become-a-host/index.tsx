import { factory } from './utils/factory';

export type BecomeAHostSegments =
  | 'getstarted'
  | 'room'
  | 'bedrooms'
  | 'bathrooms'
  | 'location'
  | 'amenities'
  | 'spaces'
  | 'description'
  | 'title'
  | 'phone'
  | 'requirements'
  | 'rules'
  | 'checkin'
  | 'advance'
  | 'period'
  | 'price'
  | 'booking-scenarios'
  | 'photos';
export interface CreateProps {
  variant: BecomeAHostSegments;
  [props: string]: any;
}

export const Segment: React.FC<CreateProps> = ({ variant, ...props }) => {
  const variants = factory(props);
  return (
    <div data-testid={`${variant}-segment`}>{variants[variant].component}</div>
  );
};
