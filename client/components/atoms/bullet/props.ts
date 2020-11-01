export type CharacteristicBulletProps = {
  characteristicType?: string;
};

export type BulletProps = CharacteristicBulletProps & {
  extendsTo?: string;
  type: string;
};
