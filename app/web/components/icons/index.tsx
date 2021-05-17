import { ActionIcon, ActionIconProps } from './action';
import { AmenityIcon, AmenityIconTypeProps } from './amenity';
import { ExperienceIcon, ExperienceIconTypeProps } from './experience';
import { GeneralIcon, GeneralIconTypeProps } from './general';
import { LogoIcon, LogoIconTypeProps } from './logo';
import { ProfileIcon, ProfileIconTypeProps } from './profile';
import { SemanticIcon, SemanticIconTypeProps } from './semantic';
import { StayIcon, StayIconTypeProps } from './stay';

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

export type IconProps = ActionIconProps & {
  width: number;
  height: number;
};
//   extends BaseIconProps,
//     LogoIconTypeProps,
//     AmenityIconTypeProps,
//     ExperienceIconTypeProps,
//     ActionIconTypeProps,
//     ProfileIconTypeProps,
//     SemanticIconTypeProps,
//     GeneralIconTypeProps,
//     StayIconTypeProps {
//   variant: IconVariants;
// }

export const Icon: React.FC<IconProps> = ({ width, height, ...props }) => {
  const { variant } = props;
  const variants = {
    logo: <LogoIcon {...props} />,
    action: <ActionIcon {...props} />,
    amenity: <AmenityIcon {...props} />,
    experience: <ExperienceIcon {...props} />,
    profile: <ProfileIcon {...props} />,
    semantic: <SemanticIcon {...props} />,
    general: <GeneralIcon {...props} />,
    stay: <StayIcon {...props} />,
  };
  return <div style={{ width, height }}>{variants[variant]}</div>;
};
