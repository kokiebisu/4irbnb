import { AddressInput } from '../input-address';
import { AnotherInput } from '../input-another';
import { BirthdateInput } from '../input-birthdate';
import { CheckboxInput } from '../input-checkbox';
import { ClosedInput } from '../input-closed';
import { CounterInput } from '../input-counter';
import { EmailInput } from '../input-email';
import { GuestsInput } from '../input-guests';
import { LimitInput } from '../input-limit';
import { NameInput } from '../input-name';
import { PasswordInput } from '../input-password';
import { PhoneInput } from '../input-phone';
import { PhotoInput } from '../input-photo';
import { PlaceInput } from '../input-place';
import { PriceInput } from '../input-price';
import { RadioInput } from '../input-radio';
import { RegionInput } from '../input-region';
import { SearchbarInput } from '../input-searchbar';
import { SelectInput } from '../input-select';
import { TextInput } from '../input-text';
import { TextAreaInput } from '../input-textarea';
import { VerifyInput } from '../input-verify';

export const factory = (props) => {
  switch (props.variant) {
    case 'address':
      return <AddressInput {...props} />;
    case 'another':
      return <AnotherInput {...props} />;
    case 'birthdate':
      return <BirthdateInput {...props} />;
    case 'checkbox':
      return <CheckboxInput {...props} />;
    case 'closed':
      return <ClosedInput {...props} />;
    case 'counter':
      return <CounterInput {...props} />;
    case 'email':
      return <EmailInput {...props} />;
    case 'guests':
      return <GuestsInput {...props} />;
    case 'limit':
      return <LimitInput {...props} />;
    case 'name':
      return <NameInput {...props} />;
    case 'password':
      return <PasswordInput {...props} />;
    case 'phone':
      return <PhoneInput {...props} />;
    case 'photo':
      return <PhotoInput {...props} />;
    case 'place':
      return <PlaceInput {...props} />;
    case 'price':
      return <PriceInput {...props} />;
    case 'radio':
      return <RadioInput {...props} />;
    case 'region':
      return <RegionInput {...props} />;
    case 'searchbar':
      return <SearchbarInput {...props} />;
    case 'select':
      return <SelectInput {...props} />;
    case 'text':
      return <TextInput {...props} />;
    case 'textarea':
      return <TextAreaInput {...props} />;
    case 'verify':
      return <VerifyInput {...props} />;
    default:
      throw new Error(`[INPUT] Invalid variant provided`);
  }
};
