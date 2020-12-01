import { Input } from "../../../components/atoms/input/input.component";
import React, { useState } from "react";
import { KindCreateProps } from "./props";

import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";

/** Components */
import { properties } from "../../atoms/input/logic/logic.types";

export const KindCreate: React.FC<KindCreateProps> = () => {
  const [place, setPlace] = useState(undefined);
  const [property, setProperty] = useState(undefined);

  const displayDescription = () => {
    return properties[place].find((type) => type.name === property).description;
  };

  return (
    <div>
      <div className={[space["m-b--45"]].join(" ")}>
        <h3 className={[font["size--20"], color["c--gray__2"]].join(" ")}>
          What kind of place are you listing?
        </h3>
      </div>
      <div style={{ width: 250 }} className={[space["m-b--22"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          <h4 className={[font["size--14"], color["c--gray__0"]].join(" ")}>
            First, let's narrow things down
          </h4>
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
      <div className={[space["m-b--8"]].join(" ")} style={{ width: 250 }}>
        <div className={[space["m-b--8"]].join(" ")}>
          <h4 className={[font["size--14"], color["c--gray__0"]].join(" ")}>
            Now choose a property type
          </h4>
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
      {property && (
        <div>
          <h4 className={[font["size--12"], color["c--gray__0"]].join(" ")}>
            {displayDescription()}
          </h4>
        </div>
      )}
    </div>
  );
};
