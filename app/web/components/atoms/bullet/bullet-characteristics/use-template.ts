export const useCharacteristicsBulletTemplate = ({
  characteristicType,
  duration,
  devices,
  people,
  languages,
  group,
}: {
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
}) => {
  const characteristics = {
    house: {
      icon: {
        variant: 'stay' as const,
        stayType: 'house' as const,
        width: 24,
        height: 24,
      },
      title: 'Entire home',
      description: 'You’ll have the farm stay to yourself.',
    },
    sparkle: {
      icon: {
        variant: 'stay' as const,
        stayType: 'sparkle' as const,
        width: 24,
        height: 24,
      },
      title: 'Enhanced Clean',
      description:
        "This host committed to Airbnb's 5-step enhanced cleaning process.",
    },
    door: {
      icon: {
        variant: 'stay' as const,
        stayType: 'door' as const,
        width: 24,
        height: 24,
      },
      title: 'Self check-in',
      description: 'You can check in with the doorman.',
    },
    calendar: {
      icon: {
        variant: 'stay' as const,
        stayType: 'calendar' as const,
        width: 24,
        height: 24,
      },
      title: 'Cancellation policy',
      description:
        'Add your trip dates to get the cancellation details for this stay.',
    },
    guidelines: {
      icon: {
        variant: 'stay' as const,
        stayType: 'guidelines' as const,
        width: 24,
        height: 24,
      },
      title: 'House rules',
      description: 'The host doesn’t allow pets, parties, or smoking.',
    },
    time: {
      icon: {
        variant: 'experience' as const,
        experienceType: 'time' as const,
        width: 32,
        height: 32,
      },
      title: duration,
      description: null,
    },
    devices: {
      icon: {
        variant: 'experience' as const,
        experienceType: 'computer' as const,
        width: 32,
        height: 32,
      },
      title: `Join from your ${devices.join(', ')}`,
      description: null,
    },
    people: {
      icon: {
        variant: 'experience' as const,
        experienceType: 'people' as const,
        width: 32,
        height: 32,
      },
      title: `Up to ${people} people. Private groups available for up to ${group}`,
      description: null,
    },
    language: {
      icon: {
        variant: 'experience' as const,
        experienceType: 'language' as const,
        width: 32,
        height: 32,
      },
      title: `Hosted in ${languages.join(', ')} (Simplified)`,
      description: null,
    },
  };

  return characteristics[characteristicType];
};
