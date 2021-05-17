import { HostTypeVariants } from './template';

export const useHostBulletTemplate = ({
  hostType,
  total,
}: {
  hostType: HostTypeVariants;
  total: number;
}) => {
  const hostTypes = {
    review: {
      icon: { variant: 'profile', profileType: 'star' },
      description: `${total} Reviews`,
    },
    verified: {
      icon: { variant: 'profile', profileType: 'verified' },
      description: 'Identity verified',
    },
    superhost: {
      icon: { variant: 'profile', profileType: 'superhost' },
      description: 'Superhost',
    },
  };

  return { ...hostTypes[hostType] } as {
    icon: { variant: string; profileType: string };
    description: string;
  };
};
