import React from 'react';
import { ActionIcon, ActionIconTypeProps } from './action';
import { AmenityIcon, AmenityIconTypeProps } from './amenity';
import { ExperienceIcon, ExperienceIconTypeProps } from './experience';
import { GeneralIcon, GeneralIconTypeProps } from './general';
import { LogoIcon, LogoIconTypeProps } from './logo';
import { ProfileIcon, ProfileIconTypeProps } from './profile';
import { SemanticIcon, SemanticIconTypeProps } from './semantic';
import { StayIcon, StayIconTypeProps } from './stay';

export const $Icon = {
  LOGO: 'logo',
  PROFILE: 'profile',
  AMENITY: 'amenity',
  EXPERIENCE: 'experience',
  ACTION: 'action',
  SEMANTIC: 'semantic',
  GENERAL: 'general',
  STAY: 'stay',
};

export interface IconProps {
  fill?: string;
  circled?: boolean;
  inversed?: boolean;
  width?: number;
  height?: number | string;
}

export interface IconPropsWithType
  extends IconProps,
    LogoIconTypeProps,
    AmenityIconTypeProps,
    ExperienceIconTypeProps,
    ActionIconTypeProps,
    ProfileIconTypeProps,
    SemanticIconTypeProps,
    GeneralIconTypeProps,
    StayIconTypeProps {}

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
    semantic: <SemanticIcon {...props} />,
    general: <GeneralIcon {...props} />,
    stay: <StayIcon {...props} />,
  };
  return <div style={{ width, height }}>{variants[variant]}</div>;
};
