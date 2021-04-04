import { Category } from './category';
import { Nearby } from './nearby';
import { Banner } from './banner';
import { Online } from './online';
import { Anywhere } from './anywhere';
import { Destinations } from './destinations';
import { Worth } from './worth';

export const $Segment = {
  CATEGORY: 'category',
  NEARBY: 'nearby',
  BANNER: 'banner',
  ONLINE: 'online',
  ANYWHERE: 'anywhere',
  DESTINATIONS: 'destinations',
  WORTH: 'worth',
};

export interface SegmentProps {
  variant: string;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment: React.FC<SegmentProps> = ({ variant }) => {
  const variants: { [key: string]: JSX.Element } = {
    category: <Category />,
    nearby: <Nearby />,
    banner: <Banner />,
    online: <Online />,
    anywhere: <Anywhere />,
    destinations: <Destinations />,
    worth: <Worth />,
  };

  return <div data-testid={`${variant}-landing`}>{variants[variant]}</div>;
};
