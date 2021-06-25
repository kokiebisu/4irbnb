import { AmenityIconTemplate, AmenityIconTemplateProps } from './template';

export type AmenityIconProps = AmenityIconTemplateProps & {
  width: number;
  height: number;
};

export const AmenityIcon = ({ width, height, ...props }: AmenityIconProps) => {
  return (
    <div data-testid="amenity-icon" style={{ width, height }}>
      <AmenityIconTemplate {...props} />
    </div>
  );
};

export type AmenityIconTypes =
  | 'smokeAlarm'
  | 'tv'
  | 'kitchen'
  | 'heating'
  | 'privateEntrance'
  | 'carbonAlarm';
