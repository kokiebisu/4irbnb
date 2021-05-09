export const useClosedButtonContent = ({ closedType }) => {
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
