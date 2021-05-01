export const useHostBulletContent = ({ hostType, total }) => {
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

  return { ...hostTypes[hostType] };
};
