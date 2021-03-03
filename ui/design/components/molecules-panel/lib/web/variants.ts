import { experience } from './panel.experience';
import { room } from './panel.room';

export const webVariants = (props) => {
  return {
    ...experience(props),
    ...room(props),
  };
};
