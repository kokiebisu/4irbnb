export const stretchMixin = (stretch) => {
  return stretch ? 'w-full block' : 'w-auto';
};

export const displayMixin = (block) => {
  return block ? 'block' : 'inline-block';
};

export const styleDisable = (disable) => {
  return disable ? 'cursor-default' : 'cursor-pointer';
};
