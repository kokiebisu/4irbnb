import { verify } from '@button/button-verify';
import { address } from '@input/input-address';
import { another } from '@input/input-another';
import { birthdate } from '@input/input-birthdate';
import { checkbox } from '@input/input-checkbox';
import { counter } from '@input/input-counter';
import { email } from '@input/input-email';
import { limit } from '@input/input-limit';
import { password } from '@input/input-password';
import { photo } from '@input/input-photo';
import { place } from '@input/input-place';
import { region } from '@input/input-region';
import { select } from '@input/input-select';
import { text } from '@input/input-text';
import { textarea } from '@input/input-textarea';
import { guests } from '@input/input-guests';
import { phone } from '@input/input-phone';
import { price } from '@input/input-price';
import { radio } from '@input/input-radio';
import { name } from '@input/input-name';
import { closed } from '@input/input-closed';

export const factory = (props) => {
  return {
    ...address(props),
    ...another(props),
    ...birthdate(props),
    ...checkbox(props),
    ...closed(props),
    ...counter(props),
    ...email(props),
    ...guests(props),
    ...limit(props),
    ...name(props),
    ...password(props),
    ...phone(props),
    ...photo(props),
    ...place(props),
    ...price(props),
    ...radio(props),
    ...region(props),
    ...select(props),
    ...text(props),
    ...textarea(props),
    ...verify(props),
  };
};
