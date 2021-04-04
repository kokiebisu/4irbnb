import { useCollections } from './logic';
import { CollectionsTemplate } from './template';

export const Collections = () => {
  const data = useCollections();
  return <CollectionsTemplate {...data} />;
};
