import { IconProps } from '..';
import { ActionIcon } from '../action';
import { AmenityIcon } from '../amenity';
import { ExperienceIcon } from '../experience';
import { GeneralIcon } from '../general';
import { LogoIcon } from '../logo';
import { ProfileIcon } from '../profile';
import { SemanticIcon } from '../semantic';
import { StayIcon } from '../stay';

export const factory = (props: IconProps): JSX.Element => {
  switch (props.variant) {
    case 'logo':
      return <LogoIcon {...props} />;
    case 'action':
      return <ActionIcon {...props} />;
    case 'amenity':
      return <AmenityIcon {...props} />;
    case 'experience':
      return <ExperienceIcon {...props} />;
    case 'profile':
      return <ProfileIcon {...props} />;
    case 'semantic':
      return <SemanticIcon {...props} />;
    case 'general':
      return <GeneralIcon {...props} />;
    case 'stay':
      return <StayIcon {...props} />;
    default:
      throw new Error('[ICON] Invalid variant');
  }
};
