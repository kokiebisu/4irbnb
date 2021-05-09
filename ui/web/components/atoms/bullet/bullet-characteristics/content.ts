export const useCharacteristicsBulletContent = ({
  characteristicType,
  duration,
  devices,
  people,
  languages,
  group,
}) => {
  const characteristics = {
    house: {
      icon: {
        variant: 'stay',
        stayType: 'house',
        width: 24,
      },
      title: 'Entire home',
      description: 'You’ll have the farm stay to yourself.',
    },
    sparkle: {
      icon: {
        variant: 'stay',
        stayType: 'sparkle',
        width: 24,
      },
      title: 'Enhanced Clean',
      description:
        "This host committed to Airbnb's 5-step enhanced cleaning process.",
    },
    door: {
      icon: {
        variant: 'stay',
        stayType: 'door',
        width: 24,
      },
      title: 'Self check-in',
      description: 'You can check in with the doorman.',
    },
    calendar: {
      icon: {
        variant: 'stay',
        stayType: 'calendar',
        width: 24,
      },
      title: 'Cancellation policy',
      description:
        'Add your trip dates to get the cancellation details for this stay.',
    },
    guidelines: {
      icon: {
        variant: 'stay',
        stayType: 'guidelines',
        width: 24,
      },
      title: 'House rules',
      description: 'The host doesn’t allow pets, parties, or smoking.',
    },
    time: {
      icon: {
        variant: 'experience',
        experienceType: 'time',
        width: 32,
      },
      title: duration,
      description: null,
    },
    devices: {
      icon: {
        variant: 'experience',
        experienceType: 'computer',
        width: 32,
      },
      title: `Join from your ${devices.join(', ')}`,
      description: null,
    },
    people: {
      icon: {
        variant: 'experience',
        experienceType: 'people',
        width: 32,
      },
      title: `Up to ${people} people. Private groups available for up to ${group}`,
      description: null,
    },
    language: {
      icon: {
        variant: 'experience',
        experienceType: 'language',
        width: 32,
      },
      title: `Hosted in ${languages} (Simplified)`,
      description: null,
    },
  };

  return { ...characteristics[characteristicType] };
};
