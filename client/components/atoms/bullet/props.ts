export type CharacteristicBulletProps = {
  type?: string;
  title?: string;
  description?: string;
  guestnumber?: number;
  hostName?: string;
  percentage?: number;
};

export type BulletProps = CharacteristicBulletProps & {
  extendsTo?: string;
  type: string;
};
