import { Input } from "../../../components/atoms/input/input.component";
import React, { useState } from "react";
import { KindCreateProps } from "./props";

export const KindCreate: React.FC<KindCreateProps> = () => {
  const [place, setPlace] = useState(undefined);
  const [property, setProperty] = useState(undefined);
  console.log("place", place);
  console.log("property", property);
  return (
    <div>
      <div>
        <h3>What kind of place are you listing?</h3>
      </div>
      <div>
        <div>
          <h3>First, let's narrow things down</h3>
        </div>
        <div>
          <Input
            inputType="place"
            type="select"
            value={place}
            handleChange={(e) => {
              setPlace(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <h3>Now choose a property type</h3>
        </div>
        <div>
          <Input
            disabled={!place}
            inputType={place && place}
            type="select"
            value={property}
            handleChange={(e) => {
              setProperty(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
