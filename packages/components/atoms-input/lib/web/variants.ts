import { password } from './input.password';
import { email } from './input.email';
import { name } from './input.name';
import { birthdate } from './input.birthdate';
import { phone } from './input.phone';
import { region } from './input.region';
import { place } from './input.place';
import { guests } from './input.guests';
import { address } from './input.address';
import { select } from './input.select';
import { radio } from './input.radio';
import { counter } from './input.counter';
import { text } from './input.text';
import { checkbox } from './input.checkbox';
import { textarea } from './input.textarea';
import { limit } from './input.limit';
import { verify } from './input.verify';
import { closed } from './input.closed';
import { price } from './input.price';
import { photo } from './input.photo';
import { another } from './input.another';

export const variants: (
  props
) => {
  [variant: string]: {
    component: JSX.Element;
    css: any;
  };
} = (props) => {
  return {
    ...email(props),
    ...password(props),
    ...name(props),
    ...birthdate(props),
    ...phone(props),
    ...region(props),
    ...place(props),
    ...guests(props),
    ...address(props),
    ...select(props),
    ...radio(props),
    ...counter(props),
    ...text(props),
    ...checkbox(props),
    ...textarea(props),
    ...limit(props),
    ...verify(props),
    ...closed(props),
    ...price(props),
    ...photo(props),
    ...another(props),
  };
};
