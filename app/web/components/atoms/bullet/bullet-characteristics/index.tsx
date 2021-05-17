import {
  CharacteristicsBulletTemplate,
  CharacteristicsBulletTemplateProps,
} from './template';
import { useCharacteristicsBullet } from './logic';

export interface CharacteristicsBulletProps
  extends CharacteristicsBulletTemplateProps {
  time: number;
  variant: 'characteristic';
}

const CharacteristicsBullet: React.FC<CharacteristicsBulletProps> = ({
  time,
  ...props
}) => {
  const data = useCharacteristicsBullet({ time });
  return <CharacteristicsBulletTemplate {...data} {...props} />;
};

export const characteristic = (props: CharacteristicsBulletProps) => {
  return {
    characteristic: { component: <CharacteristicsBullet {...props} /> },
  };
};
