export type ClosedTypeVariants = 'close' | 'check';

export const useClosedButtonContent = ({
  closedType,
}: {
  closedType: ClosedTypeVariants;
}) => {
  const closedTypes = {
    close: {
      icon: {
        variant: 'action' as const,
        actionType: 'close' as const,
      },
    },
    check: {
      icon: {
        variant: 'semantic' as const,
        semanticType: 'check' as const,
      },
    },
  };

  return { ...closedTypes[closedType] };
};
