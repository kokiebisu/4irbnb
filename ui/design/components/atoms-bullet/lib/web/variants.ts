import { amenity } from './bullet.amenity';
import { bring } from './bullet.bring';
import { characteristic } from './bullet.characteristics';
import { check } from './bullet.check';
import { experience } from './bullet.experience';
import { help } from './bullet.help';
import { host } from './bullet.host';
import { know } from './bullet.know';
import { onlinehost } from './bullet.onlinehost';
import { priority } from './bullet.priority';
import { question } from './bullet.question';
import { rating } from './bullet.rating';
import { required } from './bullet.required';
import { scenario } from './bullet.scenario';
import { score } from './bullet.score';

export const variants: (
  props
) => { [variant: string]: { component: JSX.Element; css: any } } = (props) => {
  return {
    ...characteristic(props),
    ...amenity(props),
    ...score(props),
    ...host(props),
    ...know(props),
    ...rating(props),
    ...bring(props),
    ...experience(props),
    ...priority(props),
    ...help(props),
    ...required(props),
    ...onlinehost(props),
    ...question(props),
    ...check(props),
    ...scenario(props),
  };
};
