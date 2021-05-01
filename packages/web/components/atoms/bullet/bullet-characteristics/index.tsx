import { useCharacteristicsBullet } from './logic';
import { CharacteristicsBulletTemplate } from './template';

export interface CharacteristicsBulletProps {
  characteristicType?:
    | 'house'
    | 'sparkle'
    | 'door'
    | 'calendar'
    | 'guidelines'
    | 'time'
    | 'devices'
    | 'people'
    | 'language';
  time?: string;
  devices?: string[];
  people?: number;
  languages?: string[];
}

const CharacteristicsBullet: React.FC<CharacteristicsBulletProps> = (props) => {
  const data = useCharacteristicsBullet(props);
  return <CharacteristicsBulletTemplate {...data} />;
};

export const characteristic = (props) => {
  return {
    characteristic: { component: <CharacteristicsBullet {...props} /> },
  };
};
