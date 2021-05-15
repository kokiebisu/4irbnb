import { arrangements } from '../arrangements';
import { amenities } from '../amenities';
import { description } from '../description';
import { reviews } from '../reviews';
import { preview } from '../preview';
import { other } from '../other';
import { know } from '../know';
import { host } from '../host';

export const factory = (props) => {
  return {
    ...amenities(props),
    ...arrangements(props),
    ...description(props),
    ...host(props),
    ...know(props),
    ...other(props),
    ...preview(props),
    ...reviews(props),
  };
};
