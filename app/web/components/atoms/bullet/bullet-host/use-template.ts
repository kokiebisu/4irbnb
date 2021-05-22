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
      icon: { variant: 'profile' as const, profileType: 'star' as const },
      description: `${total} Reviews`,
    },
    verified: {
      icon: { variant: 'profile' as const, profileType: 'verified' as const },
      description: 'Identity verified',
    },
    superhost: {
      icon: { variant: 'profile' as const, profileType: 'superhost' as const },
      description: 'Superhost',
    },
  };

  return { ...hostTypes[hostType] } as {
    icon: {
      variant: 'profile';
      profileType: 'star' | 'verified' | 'superhost';
    };
    description: string;
  };
};
