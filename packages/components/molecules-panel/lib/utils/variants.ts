import { experience } from '../web/panel.experience';

export const generateVariants: (
  platform,
  web,
  props
) => { [variant: string]: { component: JSX.Element; css: any } } = (
  platform,
  web,
  props
) => {
  return { web: web(props) }[platform];
};
