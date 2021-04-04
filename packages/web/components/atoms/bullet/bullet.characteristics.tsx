import {
  Calendar,
  Devices,
  Door,
  Guidelines,
  House,
  Language,
  People,
  Sparkle,
  Time,
} from '@svg/original';

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
export const CharacteristicBullet: React.FC<{
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
      icon: <House width={24} />,
      title: 'Entire home',
      description: 'You’ll have the farm stay to yourself.',
    },
    sparkle: {
      icon: <Sparkle width={24} />,
      title: 'Enhanced Clean',
      description:
        "This host committed to Airbnb's 5-step enhanced cleaning process.",
    },
    door: {
      icon: <Door width={24} />,
      title: 'Self check-in',
      description: 'You can check in with the doorman.',
    },
    calendar: {
      icon: <Calendar width={24} />,
      title: 'Cancellation policy',
      description:
        'Add your trip dates to get the cancellation details for this stay.',
    },
    guidelines: {
      icon: <Guidelines width={24} />,
      title: 'House rules',
      description: 'The host doesn’t allow pets, parties, or smoking.',
    },
    time: {
      icon: <Time width={32} />,
      title: Helper.displayDuration(time),
    },
    devices: {
      icon: <Devices width={32} />,
      title: `Join from your ${devices}`,
    },
    people: {
      icon: <People width={32} />,
      title: `Up to ${people} people. Private groups available for up to ${group}`,
    },
    language: {
      icon: <Language width={32} />,
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
