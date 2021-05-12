export const useSharingCard = ({ sharing }) => {
  const types = {
    meditate: {
      imgUrl:
        'https://a0.muscache.com/pictures/1f129c2b-4da0-463e-a918-ff3f9f8fa325.jpg',
      title: 'Meditate with Sheep',
      description:
        'Mindfulness straight from a Scottish farm, accompanied by encounters with some fuzzy friends.',
    },
    baking: {
      imgUrl:
        'https://a0.muscache.com/pictures/1f96d01b-e5c0-409f-a01f-5c83e2632987.jpg',
      title: 'Family Baking Fun',
      description:
        'A good time in the kitchen for kids and grown-ups alike that ends with a batch of freshly baked cookies.',
    },
    magic: {
      imgUrl:
        'https://a0.muscache.com/pictures/18518c4e-5c84-43f3-91b0-485207a931c0.jpg',
      title: 'Secrets of Magic',
      description:
        'Part show and part masterclass, guests learn magic psychology and tricks they can do at home.',
    },
  };
  return {
    imgUrl: types[sharing].imgUrl,
    title: types[sharing].title,
    description: types[sharing].description,
  };
};
