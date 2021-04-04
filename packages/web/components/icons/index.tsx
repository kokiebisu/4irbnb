import React from 'react';
import { ActionIcon, ActionIconTypeProps } from './action';
import { AmenityIcon, AmenityIconTypeProps } from './amenity';
import { ExperienceIcon, ExperienceIconTypeProps } from './experience';
import { LogoIcon, LogoIconTypeProps } from './logo';
import { ProfileIcon, ProfileIconTypeProps } from './profile';

export const $Icon = {
  LOGO: 'logo',
  PROFILE: 'profile',
  AMENITY: 'amenity',
  EXPERIENCE: 'experience',
  ACTION: 'action',
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
    ExperienceIconTypeProps,
    ActionIconTypeProps,
    ProfileIconTypeProps {}

export const Icon: React.FC<IconPropsWithType & { variant: string }> = ({
  variant,
  width,
  height,
  ...props
}) => {
  const variants = {
    logo: <LogoIcon {...props} />,
    action: <ActionIcon {...props} />,
    amenity: <AmenityIcon {...props} />,
    experience: <ExperienceIcon {...props} />,
    profile: <ProfileIcon {...props} />,
  };
  return <div style={{ width, height }}>{variants[variant]}</div>;
};
