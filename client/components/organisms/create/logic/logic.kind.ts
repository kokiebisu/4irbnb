import { useEffect, useState } from "react";
import {
  inputTypes,
  properties,
} from "../../../../components/atoms/input/logic/logic.types";

export const getLogic = () => {
  const [place, setPlace] = useState(undefined);
  const [property, setProperty] = useState(undefined);
  const [description, setDescription] = useState(undefined);

  useEffect(() => {
    if (property) {
      setProperty(inputTypes[place].options[0].props.children);
    }
  }, [place]);

  useEffect(() => {
    const displayDescription = () => {
      return properties[place].find((type) => type.name === property)
        .description;
    };
    if (property) {
      setDescription(displayDescription());
    }
  }, [property]);

  return [place, property, description, setPlace, setProperty];
};
