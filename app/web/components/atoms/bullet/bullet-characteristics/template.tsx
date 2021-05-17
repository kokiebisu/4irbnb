import { Icon } from '@icons';
import { useCharacteristicsBulletTemplate } from './template-logic';

export interface CharacteristicsBulletTemplateProps {
  characteristicType:
    | 'house'
    | 'sparkle'
    | 'door'
    | 'calendar'
    | 'guidelines'
    | 'time'
    | 'devices'
    | 'people'
    | 'language';
  duration: string;
  devices: string[];
  people: number;
  languages: string[];
  group: number;
}

/**
 * Renders the characteristic bullet
 * @param {string} characteristic - Type of characteristics
 * @param {number} time - Time it takes for the experience
 * @param {string[]} devices - Devices allowed for the experience
 * @param {number} people - Number of people that can join
 * @param {group} group - Number of people that can join a private group
 * @param {string[]} languages - Languages the host can speak
 */
export const CharacteristicsBulletTemplate: React.FC<CharacteristicsBulletTemplateProps> = ({
  duration,
  characteristicType,
  devices,
  people,
  languages,
  group,
}) => {
  const { icon, title, description } = useCharacteristicsBulletTemplate({
    characteristicType,
    duration,
    devices,
    people,
    languages,
    group,
  });
  return (
    <div className="flex my-4 items-center pr-4">
      <div className="mr-4">
        <Icon {...icon} />
      </div>
      <div>
        {description ? (
          <h3 className="mb-1 font-base text-base text-gray-600 tracking-tight">
            {title}
          </h3>
        ) : (
          <p>{title}</p>
        )}
        {description && (
          <p className="text-gray-500 font-thin text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};
