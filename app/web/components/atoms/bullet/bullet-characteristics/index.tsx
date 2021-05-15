import {
  CharacteristicsBulletTemplate,
  CharacteristicsBulletTemplateProps,
} from './template';
import { useCharacteristicsBullet } from './logic';

export interface CharacteristicsBulletProps
  extends CharacteristicsBulletTemplateProps {}

const CharacteristicsBullet: React.FC<CharacteristicsBulletProps> = (props) => {
  const data = useCharacteristicsBullet(props as { time: number });
  return <CharacteristicsBulletTemplate {...data} />;
};

export const characteristic = (props: CharacteristicsBulletProps) => {
  return {
    characteristic: { component: <CharacteristicsBullet {...props} /> },
  };
};
