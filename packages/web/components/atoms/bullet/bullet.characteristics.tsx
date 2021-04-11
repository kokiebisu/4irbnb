import { Icon, $Icon } from '@icons';
import * as Helper from '@helper/time';

enum kinds {
  house = 'house',
  sparkle = 'sparkle',
  door = 'door',
  calendar = 'calendar',
  guidelines = 'guidelines',
  time = 'time',
  devices = 'devices',
  people = 'people',
  language = 'language',
}

export interface CharacteristicsBulletProps {
  characteristicType?: kinds;
  time?: number;
  languages?: string[];
  devices?: string[];
  people?: number;
  group?: number;
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
export const CharacteristicsBullet: React.FC<CharacteristicsBulletProps> = ({
  characteristicType,
  time,
  devices,
  people,
  group,
  languages,
}) => {
  const characteristics = {
    house: {
      icon: <Icon variant={$Icon.STAY} stayType="house" width={24} />,
      title: 'Entire home',
      description: 'You’ll have the farm stay to yourself.',
    },
    sparkle: {
      icon: <Icon variant={$Icon.STAY} stayType="sparkle" width={24} />,
      title: 'Enhanced Clean',
      description:
        "This host committed to Airbnb's 5-step enhanced cleaning process.",
    },
    door: {
      icon: <Icon variant={$Icon.STAY} stayType="door" width={24} />,
      title: 'Self check-in',
      description: 'You can check in with the doorman.',
    },
    calendar: {
      icon: <Icon variant={$Icon.STAY} stayType="calendar" width={24} />,
      title: 'Cancellation policy',
      description:
        'Add your trip dates to get the cancellation details for this stay.',
    },
    guidelines: {
      icon: <Icon variant={$Icon.STAY} stayType="guidelines" width={24} />,
      title: 'House rules',
      description: 'The host doesn’t allow pets, parties, or smoking.',
    },
    time: {
      icon: (
        <Icon variant={$Icon.EXPERIENCE} experienceType="time" width={32} />
      ),
      title: Helper.displayDuration(time),
      description: null,
    },
    devices: {
      icon: (
        <Icon variant={$Icon.EXPERIENCE} experienceType="computer" width={32} />
      ),
      title: `Join from your ${devices.join(', ')}`,
      description: null,
    },
    people: {
      icon: (
        <Icon variant={$Icon.EXPERIENCE} experienceType="people" width={32} />
      ),
      title: `Up to ${people} people. Private groups available for up to ${group}`,
      description: null,
    },
    language: {
      icon: (
        <Icon variant={$Icon.EXPERIENCE} experienceType="language" width={32} />
      ),
      title: `Hosted in ${languages} (Simplified)`,
      description: null,
    },
  };

  return (
    <div className="flex my-4 items-center pr-4">
      <div className="mr-4">{characteristics[characteristicType].icon}</div>
      <div>
        {characteristics[characteristicType].description ? (
          <h3 className="mb-1 font-base text-base text-gray-600 tracking-tight">
            {characteristics[characteristicType].title}
          </h3>
        ) : (
          <p>{characteristics[characteristicType].title}</p>
        )}
        {characteristics[characteristicType].description && (
          <p className="text-gray-500 font-thin text-sm">
            {characteristics[characteristicType].description}
          </p>
        )}
      </div>
    </div>
  );
};

export const characteristic = (props) => {
  return {
    characteristic: { component: <CharacteristicsBullet {...props} /> },
  };
};
