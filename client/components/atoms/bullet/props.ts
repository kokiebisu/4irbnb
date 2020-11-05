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

export interface HostBulletProps {
  total?: number;
  categoryType?: string;
}

export interface KnowBulletProps {
  categoryType?: string;
  checkin?: any;
  checkout?: string;
}

export interface RatingBulletProps {
  ratings?: number;
  reviews?: number;
}

export type BulletProps = CharacteristicBulletProps & {
  extendsTo?: string;
  type: string;
  [x: string]: any;
};
