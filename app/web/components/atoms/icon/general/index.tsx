import { GeneralIconTemplateProps, GeneralIconTemplate } from './template';

export type GeneralIconProps = GeneralIconTemplateProps & {
  width: number;
  height: number;
};

export const GeneralIcon = ({
  width,
  height,
  ...props
}: GeneralIconProps): JSX.Element => {
  return (
    <div data-testid="general-icon" style={{ width, height }}>
      <GeneralIconTemplate {...props} />
    </div>
  );
};

export type GeneralTypeVariants =
  | 'magnifyGlass'
  | 'lock'
  | 'globe'
  | 'share'
  | 'email'
  | 'flag'
  | 'bars'
  | 'login'
  | 'search'
  | 'shield'
  | 'devices'
  | 'devicesInverse'
  | 'protection'
  | 'guidance'
  | 'requirements'
  | 'customerService'
  | 'toolbox'
  | 'analytics'
  | 'education'
  | 'home'
  | 'global'
  | 'lightening'
  | 'protected'
  | 'explore';
