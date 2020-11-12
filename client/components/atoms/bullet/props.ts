export interface CharacteristicBulletProps {
  characteristicType?: string;
  time?: number;
  limit?: number;
  privateLimit?: number;
  languages?: string[];
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

export interface BringBulletProps {
  title?: string;
}

export interface ExperienceBulletProps {
  experienceType?: 'hosts' | 'activities' | 'global';
}

export interface PriorityBulletProps {
  priority?: 'protection' | 'guidance' | 'requirements';
}

export type BulletProps = CharacteristicBulletProps & {
  extendsTo?: string;
  type: string;
  [x: string]: any;
};
