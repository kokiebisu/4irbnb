import { variants as webVariants } from '../web/variants';

export const generateVariants = (platform, props) => {
  return {
    web: webVariants(props),
  }[platform];
};
