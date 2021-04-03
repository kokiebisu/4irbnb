import { SharingTemplate } from './template';

export const Sharing = () => {
  const sharings = ['meditate', 'baking', 'magic'];
  return <SharingTemplate sharings={sharings} />;
};
