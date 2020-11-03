export interface CharacteristicBulletProps {
  characteristicType?: string;
}

export interface AmenityBulletProps {
  type?: string;
  title?: string;
  removed?: boolean;
}

export type BulletProps = CharacteristicBulletProps & {
  extendsTo?: string;
  type: string;
  [x: string]: any;
};
