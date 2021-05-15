export const stretchMixin = (stretch) => {
  return stretch ? 'w-full block' : 'w-auto inline-block';
};

export const styleDisable = (disable) => {
  return disable ? 'cursor-default' : 'cursor-pointer';
};
