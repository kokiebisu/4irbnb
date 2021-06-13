import { ActionIconProps } from './action';
import { AmenityIconProps } from './amenity';
import { ExperienceIconProps } from './experience';
import { GeneralIconProps } from './general';
import { LogoIconProps } from './logo';
import { ProfileIconProps } from './profile';
import { SemanticIconProps } from './semantic';
import { StayIconProps } from './stay';
import { factory } from './utils/factory';
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

export const Icon = (props: IconProps): JSX.Element => {
  return factory(props) as JSX.Element;
};

export * from './action';
export * from './amenity';
export * from './experience';
export * from './general';
export * from './logo';
export * from './profile';
export * from './semantic';
export * from './stay';
