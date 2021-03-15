import { experience } from "./panel.experience";
import { room } from "./panel.room";

export const variants = (props) => {
  return {
    ...experience(props),
    ...room(props),
  };
};
