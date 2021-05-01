export const useAmenityBulletContent = ({ amenityType }) => {
  const amenityTypes = {
    smoke: {
      icon: {
        variant: 'amenity' as const,
        amenityType: 'smokeAlarm' as const,
      },
      description: 'Smoke alarm',
    },
    tv: {
      icon: {
        variant: 'amenity' as const,
        amenityType: 'tv' as const,
      },
      description: 'TV',
    },
    kitchen: {
      icon: {
        variant: 'amenity' as const,
        amenityType: 'kitchen' as const,
      },
      description: 'Kitchen',
    },
    heating: {
      icon: {
        variant: 'amenity' as const,
        amenityType: 'heating' as const,
      },
      description: 'Heating',
    },
    entrance: {
      icon: {
        variant: 'amenity' as const,
        amenityType: 'privateEntrance' as const,
      },
      description: 'Private entrance',
    },
    carbon: {
      icon: {
        variant: 'amenity' as const,
        amenityType: 'carbonAlarm' as const,
      },
      description: 'Carbon monoxide alarm',
    },
  };

  return { ...amenityTypes[amenityType] };
};
