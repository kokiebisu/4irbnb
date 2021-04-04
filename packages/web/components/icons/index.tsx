import { AmenityIconTypeProps } from './amenity';
import { ExperienceIconTypeProps } from './experience';
import { LogoIcon, LogoIconTypeProps } from './logo';

export const $Icon = {
  LOGO: 'logo',
  PROFILE: 'profile',
  AMENITY: 'amenity',
  EXPERIENCE: 'experience',
};

export interface IconProps {
  fill?: string;
  width?: number;
  height?: number | string;
}

export interface IconPropsWithType
  extends IconProps,
    LogoIconTypeProps,
    AmenityIconTypeProps,
    ExperienceIconTypeProps {}

export const Icon: React.FC<IconPropsWithType & { variant: string }> = ({
  variant,
  ...props
}) => {
  const variants = {
    logo: <LogoIcon {...props} />,
  };
  return variants[variant];
};
