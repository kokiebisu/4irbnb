import { auth } from '@button/button.auth';
import { back } from '@button/button.back';
import { banner } from '@button/button.banner';
import { bar } from '@button/button.bar';
import { border } from '@button/button.border';
import { calendar } from '@button/button.calendar';
import { privacy } from '@button/button.privacy';
import { closed } from '@button/button.closed';
import { currency } from '@button/button.currency';
import { destination } from '@button/button.destination';
import { filter } from '@button/button.filter';
import { globe } from '@button/button.globe';
import { link } from '@button/button.link';
import { location } from '@button/button.location';
import { logo } from '@button/button.logo';
import { modal } from '@button/button.modal';
import { nearby } from '@button/button.nearby';
import { option } from '@button/button.option';
import { paginate } from '@button/button.paginate';
import { primary } from '@button/button.primary';
import { report } from '@button/button.report';
import { search } from '@button/button.search';
import { searchbar } from '@button/button.searchbar';
import { transparent } from '@button/button.transparent';
import { underline } from '@button/button.underline';
import { video } from '@button/button.video';
import { expand } from '@button/button.expand';
import { menu } from '@button/button.menu';

export const factory = (props) => {
  return {
    ...auth(props),
    ...privacy(props),
    ...border(props),
    ...banner(props),
    ...bar(props),
    ...back(props),
    ...calendar(props),
    ...closed(props),
    ...currency(props),
    ...destination(props),
    ...filter(props),
    ...globe(props),
    ...link(props),
    ...location(props),
    ...logo(props),
    ...modal(props),
    ...nearby(props),
    ...option(props),
    ...paginate(props),
    ...primary(props),
    ...report(props),
    ...search(props),
    ...searchbar(props),
    ...transparent(props),
    ...underline(props),
    ...video(props),
    ...expand(props),
    ...menu(props),
  };
};
