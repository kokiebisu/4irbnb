import { Icon, $Icon } from '@icons';

import * as Helper from '@helper/time';

/**
 * Renders the characteristic bullet
 * @param {string} characteristic - Type of characteristics
 * @param {number} time - Time it takes for the experience
 * @param {string[]} devices - Devices allowed for the experience
 * @param {number} people - Number of people that can join
 * @param {group} group - Number of people that can join a private group
 * @param {string[]} languages - Languages the host can speak
 */
const CharacteristicBullet: React.FC<{
  characteristic?: string;
  time?: number;
  languages?: string[];
  devices?: string[];
  people?: number;
  group?: number;
}> = ({
  characteristic = 'house',
  time = 60,
  devices = ['computer', 'smartphone'],
  people = 10,
  group = 100,
  languages = ['English', 'Chinese'],
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
      icon: <Icon variant={$Icon.STAY} experienceType="time" width={32} />,
      title: Helper.displayDuration(time),
    },
    devices: {
      icon: <Icon variant={$Icon.STAY} experienceType="computer" width={32} />,
      title: `Join from your ${devices}`,
    },
    people: {
      icon: <Icon variant={$Icon.STAY} experienceType="people" width={32} />,
      title: `Up to ${people} people. Private groups available for up to ${group}`,
    },
    language: {
      icon: <Icon variant={$Icon.STAY} experienceType="language" width={32} />,
      title: `Hosted in ${languages} (Simplified)`,
    },
  };

  return (
    <div className="flex my-4 items-center pr-4">
      <div className="mr-4">{characteristics[characteristic].icon}</div>
      <div>
        {characteristics[characteristic].description ? (
          <h3 className="mb-1 font-base text-base text-gray-600 tracking-tight">
            {characteristics[characteristic].title}
          </h3>
        ) : (
          <p>{characteristics[characteristic].title}</p>
        )}
        {characteristics[characteristic].description && (
          <p className="text-gray-500 font-thin text-sm">
            {characteristics[characteristic].description}
          </p>
        )}
      </div>
    </div>
  );
};

export const characteristic = (props) => {
  return {
    characteristic: { component: <CharacteristicBullet {...props} /> },
  };
};
