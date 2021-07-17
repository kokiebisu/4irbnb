import { AddressInputProps } from "./input-address";
import { AnotherInputProps } from "./input-another";
import { BirthdateInputProps } from "./input-birthdate";
import { CheckboxInputProps } from "./input-checkbox";
import { ClosedInputProps } from "./input-closed";
import { CounterInputProps } from "./input-counter";
import { EmailInputProps } from "./input-email";
import { GuestsInputProps } from "./input-guests";
import { LimitInputProps } from "./input-limit";
import { NameInputProps } from "./input-name";
import { PasswordInputProps } from "./input-password";
import { PhoneInputProps } from "./input-phone";
import { PhotoInputProps } from "./input-photo";
import { PlaceInputProps } from "./input-place";
import { PriceInputProps } from "./input-price";
import { RadioInputProps } from "./input-radio";
import { RegionInputProps } from "./input-region";
import { SearchbarInputProps } from "./input-searchbar";
import { SelectInputProps } from "./input-select";
import { TextInputProps } from "./input-text";
import { TextAreaInputProps } from "./input-textarea";
import { VerifyInputProps } from "./input-verify";
import { factory } from "./utils/factory";

export type InputProps =
  | ({ variant: "address" } & AddressInputProps)
  | ({ variant: "another" } & AnotherInputProps)
  | ({ variant: "birthdate" } & BirthdateInputProps)
  | ({ variant: "checkbox" } & CheckboxInputProps)
  | ({ variant: "closed" } & ClosedInputProps)
  | ({ variant: "counter" } & CounterInputProps)
  | ({ variant: "email" } & EmailInputProps)
  | ({ variant: "guests" } & GuestsInputProps)
  | ({ variant: "limit" } & LimitInputProps)
  | ({ variant: "name" } & NameInputProps)
  | ({ variant: "password" } & PasswordInputProps)
  | ({ variant: "phone" } & PhoneInputProps)
  | ({ variant: "photo" } & PhotoInputProps)
  | ({ variant: "place" } & PlaceInputProps)
  | ({ variant: "price" } & PriceInputProps)
  | ({ variant: "radio" } & RadioInputProps)
  | ({ variant: "region" } & RegionInputProps)
  | ({ variant: "select" } & SelectInputProps)
  | ({ variant: "text" } & TextInputProps)
  | ({ variant: "textarea" } & TextAreaInputProps)
  | ({ variant: "verify" } & VerifyInputProps)
  | ({ variant: "searchbar" } & SearchbarInputProps);

/**
 * Bundles the input components
 * @param {string} variant - Specifies the variant of input component
 */
export const Input = ({ ...props }: InputProps): JSX.Element => {
  return factory(props);
};
