/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

import { EmailInput } from "./web/input.email";
import { PasswordInput } from "./web/input.password";
import { NameInput } from "./web/input.name";
import { BirthdateInput } from "./web/input.birthdate";
import { RegionInput } from "./web/input.region";
import { PhoneNumberInput } from "./web/input.phone";
import { PlaceInput } from "./web/input.place";
import { GuestsInput } from "./web/input.guests";
import { AddressInput } from "./web/input.address";
import { SelectInput } from "./web/input.select";
import { RadioInput } from "./web/input.radio";
import { CounterInput } from "./web/input.counter";
import { CheckboxInput } from "./web/input.checkbox";
import { TextInput } from "./web/input.text";
import { TextAreaInput } from "./web/input.textarea";
import { LimitInput } from "./web/input.limit";
import { VerifyInput } from "./web/input.verify";
import { ClosedInput } from "./web/input.closed";
import { PriceInput } from "./web/input.price";
import { PhotoInput } from "./web/input.photo";
import { AnotherInput } from "./web/input.another";

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
    [$Input.EMAIL]: <EmailInput {...props} />,
    [$Input.PASSWORD]: <PasswordInput {...props} />,
    [$Input.NAME]: <NameInput {...props} />,
    [$Input.BIRTHDATE]: <BirthdateInput {...props} />,
    [$Input.PHONE]: <PhoneNumberInput {...props} />,
    [$Input.REGION]: <RegionInput {...props} />,
    [$Input.PLACE]: <PlaceInput {...props} />,
    [$Input.GUESTS]: <GuestsInput {...props} />,
    [$Input.ADDRESS]: <AddressInput {...props} />,
    [$Input.SELECT]: <SelectInput {...props} />,
    [$Input.RADIO]: <RadioInput {...props} />,
    [$Input.COUNTER]: <CounterInput {...props} />,
    [$Input.TEXT]: <TextInput {...props} />,
    [$Input.CHECKBOX]: <CheckboxInput {...props} />,
    [$Input.TEXTAREA]: <TextAreaInput {...props} />,
    [$Input.LIMIT]: <LimitInput {...props} />,
    [$Input.VERIFY]: <VerifyInput {...props} />,
    [$Input.CLOSED]: <ClosedInput {...props} />,
    [$Input.PRICE]: <PriceInput {...props} />,
    [$Input.PHOTO]: <PhotoInput {...props} />,
    [$Input.ANOTHER]: <AnotherInput {...props} />,
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
