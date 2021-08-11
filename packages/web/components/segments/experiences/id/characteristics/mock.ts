export const title = 'Making & Eating Soup Dumplings vegan Ok';
export const stayType = 'Tiny house';
export const host = 'Host';
export const guests = 1;
export const bedrooms = 1;
export const beds = 1;
export const bathrooms = 1;
export const hostImgUrl =
  'https://a0.muscache.com/im/pictures/user/ca3ae8e3-997b-4ec6-b3af-139dd46be44b.jpg?im_w=240';
export const layoutType = 'experience';
export const ratings = 4.9;
export const numberOfReviews = 100;
export const location = 'Shanghai';
export const country = 'China';
// export const characteristics = {
//   time: 75,
//   devices: ['computer', 'phone', 'tablet'],
//   people: 10,
//   private: 100,
//   languages: ['English'],
// };
const allcharacteristics = [
  {
    icon: {
      variant: 'stay' as const,
      stayType: 'house' as const,
      width: 24,
      height: 24,
    },
    title: 'Entire home',
    description: 'You’ll have the farm stay to yourself.',
  },
  {
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
  {
    icon: {
      variant: 'stay' as const,
      stayType: 'door' as const,
      width: 24,
      height: 24,
    },
    title: 'Self check-in',
    description: 'You can check in with the doorman.',
  },
  {
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
  {
    icon: {
      variant: 'stay' as const,
      stayType: 'guidelines' as const,
      width: 24,
      height: 24,
    },
    title: 'House rules',
    description: 'The host doesn’t allow pets, parties, or smoking.',
  },
  {
    icon: {
      variant: 'experience' as const,
      experienceType: 'time' as const,
      width: 32,
      height: 32,
    },
    title: '1 hour',
    description: null,
  },
  {
    icon: {
      variant: 'experience' as const,
      experienceType: 'computer' as const,
      width: 32,
      height: 32,
    },
    title: `Join from your Mobile devices`,
    description: null,
  },
  {
    icon: {
      variant: 'experience' as const,
      experienceType: 'people' as const,
      width: 32,
      height: 32,
    },
    title: `Up to 5 people. Private groups available for up to 5`,
    description: null,
  },
  {
    icon: {
      variant: 'experience' as const,
      experienceType: 'language' as const,
      width: 32,
      height: 32,
    },
    title: `Hosted in English, Japanese (Simplified)`,
    description: null,
  },
];

export const characteristics = allcharacteristics.filter(
  (characteristic) => characteristic.icon.variant === 'experience'
);
