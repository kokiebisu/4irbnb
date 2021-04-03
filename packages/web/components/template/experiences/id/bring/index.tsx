import { BringTemplate } from './template';

export const Bring = () => {
  const necessities = [
    'All purpose flour 100g',
    'water 50g',
    '160g minced pork(40%fat),can be subbed with chicken, shrimp.If your meat is too much lean, keep the fat cut off from skin(the skin for making pork jelly)',
    '80g pork skin jelly, can be sunned with chicken feet, gelatin with stock. (Will give you instructions and video how to make it',
    'Chopped very fine ginger and spring onions 3g each.',
  ];
  return <BringTemplate necessities={necessities} />;
};
