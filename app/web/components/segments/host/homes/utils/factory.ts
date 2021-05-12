import { hosting } from '../hosting';
import { all } from '../all';
import { banner } from '../banner';
import { community } from '../community';
import { help } from '../help';
import { priority } from '../priority';
import { ready } from '../ready';

export const factory = (props) => {
  return {
    ...all(props),
    ...banner(props),
    ...community(props),
    ...help(props),
    ...hosting(props),
    ...priority(props),
    ...ready(props),
  };
};
