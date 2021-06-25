export const stretchMixin = (stretch?: boolean): string => {
  return stretch ? 'w-full block' : 'w-auto inline-block';
};

export const styleDisable = (disable: boolean): string => {
  return disable ? 'cursor-default' : 'cursor-pointer';
};
