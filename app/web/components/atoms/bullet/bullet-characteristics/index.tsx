import {
  CharacteristicsBulletTemplate,
  CharacteristicsBulletTemplateProps,
} from './template';
import { useCharacteristicsBullet } from './logic';

export interface CharacteristicsBulletProps
  extends CharacteristicsBulletTemplateProps {
  time: number;
}

export const CharacteristicsBullet: React.FC<CharacteristicsBulletProps> = ({
  time,
  ...props
}) => {
  const data = useCharacteristicsBullet({ time });
  return <CharacteristicsBulletTemplate {...data} {...props} />;
};
