import { useSharing } from './logic';
import { SharingTemplate } from './template';

export const Sharing = () => {
  const data = useSharing()
  return <SharingTemplate categories={categories} />;
};
