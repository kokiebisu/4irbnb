/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { EmailInput } from "./input.email";
import { PasswordInput } from "./input.password";
import { NameInput } from "./input.name";
import { BirthdateInput } from "./input.birthdate";
import { RegionInput } from "./input.region";
import { PhoneNumberInput } from "./input.phone";
import { PlaceInput } from "./input.place";
import { GuestsInput } from "./input.guests";
import { AddressInput } from "./input.address";
import { SelectInput } from "./input.select";
import { RadioInput } from "./input.radio";
import { CounterInput } from "./input.counter";
import { CheckboxInput } from "./input.checkbox";
import { TextInput } from "./input.text";
import { TextAreaInput } from "./input.textarea";
import { LimitInput } from "./input.limit";
import { VerifyInput } from "./input.verify";
import { ClosedInput } from "./input.closed";
import { PriceInput } from "./input.price";
import { PhotoInput } from "./input.photo";
import { AnotherInput } from "./input.another";

export const $Input = {
  EMAIL: "email",
  PASSWORD: "password",
  NAME: "name",
  BIRTHDATE: "birthdate",
  PHONE: "phone",
  REGION: "region",
  PLACE: "place",
  GUESTS: "guests",
  ADDRESS: "address",
  SELECT: "select",
  RADIO: "radio",
  COUNTER: "counter",
  TEXT: "text",
  CHECKBOX: "checkbox",
  TEXTAREA: "textarea",
  LIMIT: "limit",
  VERIFY: "verify",
  CLOSED: "closed",
  PRICE: "price",
  PHOTO: "photo",
  ANOTHER: "another",
};

export interface InputProps {
  extendsTo?: string;
  variant?: string;
  spread?: boolean;
  [property: string]: any;
}

/**
 * Bundles the input components
 * @param {string} variant - Specifies the variant of input component
 */
export const Input: React.FC<InputProps> = ({
  variant = $Input.ADDRESS,
  spread,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    email: <EmailInput {...props} />,
    password: <PasswordInput {...props} />,
    name: <NameInput {...props} />,
    birthdate: <BirthdateInput {...props} />,
    phone: <PhoneNumberInput {...props} />,
    region: <RegionInput {...props} />,
    place: <PlaceInput {...props} />,
    guests: <GuestsInput {...props} />,
    address: <AddressInput {...props} />,
    select: <SelectInput {...props} />,
    radio: <RadioInput {...props} />,
    counter: <CounterInput {...props} />,
    text: <TextInput {...props} />,
    checkbox: <CheckboxInput {...props} />,
    textarea: <TextAreaInput {...props} />,
    limit: <LimitInput {...props} />,
    verify: <VerifyInput {...props} />,
    closed: <ClosedInput {...props} />,
    price: <PriceInput {...props} />,
    photo: <PhotoInput {...props} />,
    another: <AnotherInput {...props} />,
  };

  return (
    <div
      css={{ ...(spread && { width: "100%" }) }}
      data-testid={`${variant}-input`}
    >
      {variants[variant]}
    </div>
  );
};
