import { auth } from './modal.auth';
import { booking } from './modal.booking';
import { checkin, checkout } from './modal.check';
import { globe } from './modal.globe';
import { guests } from './modal.guests';
import { listing } from './modal.listing';
import { menu } from './modal.menu';
import { privacy } from './modal.privacy';
import { location } from './modal.location';

export const webVariants = (props) => {
  return {
    ...privacy(props),
    ...menu(props),
    ...auth(props),
    ...booking(props),
    ...globe(props),
    ...location(props),
    ...guests(props),
    ...checkin(props),
    ...checkout(props),
    ...listing(props),
  };
};
