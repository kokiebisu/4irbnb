export const generateVariants = (platform, web, props) => {
  return {
    web: web(props),
  }[platform];
};
