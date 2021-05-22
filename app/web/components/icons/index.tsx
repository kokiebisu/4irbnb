import { ActionIcon, ActionIconProps } from './action';
import { AmenityIcon, AmenityIconProps, AmenityIconTypeProps } from './amenity';
import {
  ExperienceIcon,
  ExperienceIconProps,
  ExperienceIconTypeProps,
} from './experience';
import { GeneralIcon, GeneralIconProps, GeneralIconTypeProps } from './general';
import { LogoIcon, LogoIconProps, LogoIconTypeProps } from './logo';
import { ProfileIcon, ProfileIconProps, ProfileIconTypeProps } from './profile';
import {
  SemanticIcon,
  SemanticIconProps,
  SemanticIconTypeProps,
} from './semantic';
import { StayIcon, StayIconProps, StayIconTypeProps } from './stay';

export interface BaseIconProps {
  fill?: string;
  circled?: boolean;
  inversed?: boolean;
  width?: number;
  height?: number | string;
  stroke?: string;
  strokeWidth?: number;
}

export type IconVariants =
  | 'logo'
  | 'profile'
  | 'amenity'
  | 'experience'
  | 'action'
  | 'semantic'
  | 'general'
  | 'stay';

export type IconProps =
  | ({ variant: 'action' } & ActionIconProps)
  | ({ variant: 'amenity' } & AmenityIconProps)
  | ({ variant: 'logo' } & LogoIconProps)
  | ({ variant: 'profile' } & ProfileIconProps)
  | ({ variant: 'experience' } & ExperienceIconProps)
  | ({ variant: 'semantic' } & SemanticIconProps)
  | ({ variant: 'general' } & GeneralIconProps)
  | ({ variant: 'stay' } & StayIconProps);

export const Icon: React.FC<IconProps> = ({ ...props }) => {
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
  }
};
