import {
  CharacteristicsBulletTemplate,
  CharacteristicsBulletTemplateProps,
} from './template';

export interface CharacteristicsBulletProps
  extends CharacteristicsBulletTemplateProps {}

const CharacteristicsBullet: React.FC<CharacteristicsBulletProps> = (props) => {
  const data = useCharacteristicsBullet(props);
  return <CharacteristicsBulletTemplate {...data} />;
};

export const characteristic = (props) => {
  return {
    characteristic: { component: <CharacteristicsBullet {...props} /> },
  };
};
