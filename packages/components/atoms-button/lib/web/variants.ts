import { auth } from './button.auth';
import { back } from './button.back';
import { banner } from './button.banner';
import { bar } from './button.bar';
import { border } from './button.border';
import { calendar } from './button.calendar';
import { currency } from './button.currency';
import { destination } from './button.destination';
import { expand } from './button.expand';
import { filter } from './button.filter';
import { globe } from './button.globe';
import { link } from './button.link';
import { logo } from './button.logo';
import { menu } from './button.menu';
import { modal } from './button.modal';
import { nearby } from './button.nearby';
import { option } from './button.option';
import { paginate } from './button.paginate';
import { primary } from './button.primary';
import { closed } from './button.closed';
import { privacy } from './button.privacy';
import { report } from './button.report';
import { search } from './button.search';
import { searchbar } from './button.searchbar';
import { transparent } from './button.transparent';
import { underline } from './button.underline';
import { video } from './button.video';
import { location } from './button.location';

export const variants: (
  props
) => {
  [variant: string]: { component: JSX.Element; css: any };
} = (props) => {
  return {
    ...auth(props),
    ...back(props),
    ...banner(props),
    ...bar(props),
    ...border(props),
    ...calendar(props),
    ...closed(props),
    ...currency(props),
    ...destination(props),
    ...expand(props),
    ...filter(props),
    ...globe(props),
    ...link(props),
    ...location(props),
    ...logo(props),
    ...menu(props),
    ...modal(props),
    ...nearby(props),
    ...option(props),
    ...paginate(props),
    ...primary(props),
    ...privacy(props),
    ...report(props),
    ...search(props),
    ...searchbar(props),
    ...transparent(props),
    ...underline(props),
    ...video(props),
  };
};
