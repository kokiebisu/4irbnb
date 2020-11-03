export interface CharacteristicBulletProps {
  characteristicType?: string;
}

export interface AmenityBulletProps {
  amenityType?: string;
  title?: string;
  removed?: boolean;
}

export interface ScoreBulletProps {
  category?: string;
  average?: number;
  reviews?: {
    imgUrl: string;
    name: string;
    date: string;
    description: string;
  }[];
}

export type BulletProps = CharacteristicBulletProps & {
  extendsTo?: string;
  type: string;
  [x: string]: any;
};
