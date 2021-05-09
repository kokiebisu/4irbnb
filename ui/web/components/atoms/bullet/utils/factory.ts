import { amenity } from '@bullet/bullet-amenity';
import { bring } from '@bullet/bullet-bring';
import { characteristic } from '@bullet/bullet-characteristics';
import { check } from '@bullet/bullet-check';
import { experience } from '@bullet/bullet-experience';
import { help } from '@bullet/bullet-help';
import { host } from '@bullet/bullet-host';
import { know } from '@bullet/bullet-know';
import { onlinehost } from '@bullet/bullet-onlinehost';
import { priority } from '@bullet/bullet-priority';
import { question } from '@bullet/bullet-question';
import { rating } from '@bullet/bullet-rating';
import { required } from '@bullet/bullet-required';
import { scenario } from '@bullet/bullet-scenario';
import { score } from '@bullet/bullet-score';

export const factory = (props) => {
  return {
    ...amenity(props),
    ...bring(props),
    ...characteristic(props),
    ...check(props),
    ...experience(props),
    ...help(props),
    ...host(props),
    ...know(props),
    ...onlinehost(props),
    ...priority(props),
    ...question(props),
    ...rating(props),
    ...required(props),
    ...scenario(props),
    ...score(props),
  };
};
