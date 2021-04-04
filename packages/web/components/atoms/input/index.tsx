import { EmailInput } from "@input/input.email";
import { PasswordInput } from "@input/input.password";
import { NameInput } from "@input/input.name";
import { BirthdateInput } from "@input/input.birthdate";
import { RegionInput } from "@input/input.region";
import { PhoneNumberInput } from "@input/input.phone";
import { PlaceInput } from "@input/input.place";
import { GuestsInput } from "@input/input.guests";
import { AddressInput } from "@input/input.address";
import { SelectInput } from "@input/input.select";
import { RadioInput } from "@input/input.radio";
import { CounterInput } from "@input/input.counter";
import { CheckboxInput } from "@input/input.checkbox";
import { TextInput } from "@input/input.text";
import { TextAreaInput } from "@input/input.textarea";
import { LimitInput } from "@input/input.limit";
import { VerifyInput } from "@input/input.verify";
import { ClosedInput } from "@input/input.closed";
import { PriceInput } from "@input/input.price";
import { PhotoInput } from "@input/input.photo";

import shape from "@styles/shape.module.scss";
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
  variant = "text",
  spread,
  ...props
}) => {
  const variants = {
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
      className={spread && [shape["w--full"]].join(" ")}
      data-testid={`${variant}-input`}
    >
      {variants[variant]}
    </div>
  );
};
