export const useCharacteristics = () => {
  const props = {
    title: 'Making & Eating Soup Dumplings vegan Ok',
    stayType: 'Tiny house',
    host: 'Host',
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    hostImgUrl:
      'https://a0.muscache.com/im/pictures/user/ca3ae8e3-997b-4ec6-b3af-139dd46be44b.jpg?im_w=240',
    layoutType: 'experience',
    ratings: 4.9,
    numberOfReviews: 100,
    location: 'Shanghai',
    country: 'China',
    characteristics: {
      time: 75,
      devices: ['computer', 'phone', 'tablet'],
      people: 10,
      private: 100,
      languages: ['English'],
    },
  };
  return { props };
};
