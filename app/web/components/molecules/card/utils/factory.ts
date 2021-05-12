import { nearby } from '@card/card-nearby';
import { video } from '@card/card-video';
import { again } from '@card/card-again';
import { anywhere } from '@card/card-anywhere';
import { arrangements } from '@card/card-arrangements';
import { available } from '@card/card-available';
import { category } from '@card/card-category';
import { checkin } from '@card/card-checkin';
import { collection } from '@card/card-collection';
import { horizontal } from '@card/card-horizontal';
import { host } from '@card/card-host';
import { hosting } from '@card/card-hosting';
import { how } from '@card/card-how';
import { online } from '@card/card-online';
import { participate } from '@card/card-participate';
import { review } from '@card/card-review';
import { set } from '@card/card-set';
import { sharing } from '@card/card-sharing';
import { starting } from '@card/card-starting';
import { stay } from '@card/card-stay';
import { typestay } from '@card/card-typestay';
import { vertical } from '@card/card-vertical';
import { works } from '@card/card-works';

export const factory = (props) => {
  return {
    ...again(),
    ...anywhere(props),
    ...arrangements(props),
    ...available(props),
    ...category(props),
    ...checkin(props),
    ...collection(props),
    ...horizontal(props),
    ...host(props),
    ...hosting(props),
    ...how(props),
    ...nearby(props),
    ...online(props),
    ...participate(props),
    ...review(props),
    ...set(props),
    ...sharing(props),
    ...starting(props),
    ...stay(props),
    ...typestay(props),
    ...vertical(props),
    ...video(props),
    ...works(props),
  };
};
