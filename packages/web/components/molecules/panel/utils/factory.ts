import { experience } from '@panel/panel.experience';
import { room } from '@panel/panel.room';

export const factory = (props) => {
  return {
    ...experience(props),
    ...room(props),
  };
};
