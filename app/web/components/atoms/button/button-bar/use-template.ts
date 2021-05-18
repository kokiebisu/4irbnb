export type BarTypeVariants = 'menu' | 'saved' | 'login';

export const useBarButtonTemplate = ({
  barType,
  selected,
}: {
  barType: BarTypeVariants;
  selected: boolean;
}) => {
  const barTypes = {
    menu: {
      icon: {
        variant: 'general' as const,
        generalType: 'explore' as const,
        stroke: selected ? 'red' : '#737373',
      },
      name: 'Explore',
    },
    saved: {
      icon: {
        variant: 'semantic' as const,
        semanticType: 'saved' as const,
        fill: selected ? 'red' : '#737373',
      },
      name: 'Saved',
    },
    login: {
      icon: {
        variant: 'general' as const,
        generalType: 'login' as const,
        fill: selected ? 'red' : '#737373',
      },
      name: 'Log in',
    },
  };

  return { ...barTypes[barType] };
};
