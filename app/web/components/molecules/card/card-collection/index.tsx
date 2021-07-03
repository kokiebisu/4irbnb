import { CollectionCardTemplate } from './template';

export const CollectionCard = (props) => {
  return <CollectionCardTemplate {...props} />;
};

export const collection = (props) => {
  return {
    collection: {
      component: <CollectionCard {...props} />,
    },
  };
};
