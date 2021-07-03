import { SegmentProps } from '..';
import { available } from '../available';
import { bring } from '../bring';
import { characteristics } from '../characteristics';
import { description } from '../description';
import { experiences } from '../experiences';
import { host } from '../host';
import { know } from '../know';
import { participate } from '../participate';
import { preview } from '../preview';
import { reviews } from '../reviews';

export const factory = (props: SegmentProps) => {
  return {
    ...available(props),
    ...bring(props),
    ...characteristics(props),
    ...description(props),
    ...experiences(props),
    ...host(props),
    ...know(props),
    ...participate(props),
    ...preview(props),
    ...reviews(props),
  };
};
