import {
  CharacteristicsBulletTemplate,
  CharacteristicsBulletTemplateProps,
} from './template';
import { useCharacteristicsBullet } from './logic';

export type CharacteristicsBulletProps = CharacteristicsBulletTemplateProps & {
  time: number;
};

export const CharacteristicsBullet = ({
  time,
  ...props
}: CharacteristicsBulletProps): JSX.Element => {
  const data = useCharacteristicsBullet({ time });
  return <CharacteristicsBulletTemplate {...data} {...props} />;
};
