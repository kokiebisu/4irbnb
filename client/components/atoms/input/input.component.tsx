import React from "react";

/** Components */
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

/** Props */
import { InputProps } from "./props";

/** Styles */
import shape from "../../../styles/shape.module.scss";

/**
 * Bundles the input components
 * @param {string} type - Specifies the type of input component
 */
export const Input: React.FC<InputProps> = ({ type, spread, ...props }) => {
  const types = {
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
  };

  return (
    <div className={spread && [shape["w--full"]].join(" ")} data-testid="input">
      {types[type]}
    </div>
  );
};
