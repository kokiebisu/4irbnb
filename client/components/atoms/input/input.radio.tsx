import React from "react";
import { RadioInputProps } from "./props";
import input from "./input.module.scss";
import layout from "../../../styles/layout.module.scss";

export const RadioInput: React.FC<RadioInputProps> = () => {
  return (
    <div>
      <input type="radio" name="radio" id="radio1" />
      <label htmlFor="radio1">Foo</label>
    </div>
  );
};
