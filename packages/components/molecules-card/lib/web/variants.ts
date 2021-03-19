import { category } from "./card.category";
import { horizontal } from "./card.horizontal";
import { vertical } from "./card.vertical";
import { typestay } from "./card.typestay";
import { arrangements } from "./card.arrangements";
import { checkin } from "./card.checkin";
import { review } from "./card.review";
import { stay } from "./card.stay";
import { nearby } from "./card.nearby";
import { online } from "./card.online";
import { participate } from "./card.participate";
import { available } from "./card.available";
import { host } from "./card.host";
import { set } from "./card.set";
import { again } from "./card.again";
import { works } from "./card.works";
import { sharing } from "./card.sharing";
import { how } from "./card.how";
import { anywhere } from "./card.anywhere";
import { hosting } from "./card.hosting";
import { video } from "./card.video";
import { starting } from "./card.starting";
import { collection } from "./card.collection";

export const variants = (props) => {
  return {
    ...category(props),
    ...horizontal(props),
    ...vertical(props),
    ...typestay(props),
    ...arrangements(props),
    ...checkin(props),
    ...review(props),
    ...stay(props),
    ...nearby(props),
    ...online(props),
    ...participate(props),
    ...available(props),
    ...host(props),
    ...set(props),
    ...again(props),
    ...works(props),
    ...sharing(props),
    ...how(props),
    ...anywhere(props),
    ...hosting(props),
    ...video(props),
    ...starting(props),
    ...collection(props),
  };
};
