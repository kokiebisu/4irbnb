import React, { useEffect, useState } from "react";

/** Components */
import { Input } from "../../../components/atoms/input/input.component";
import { Layout } from "../../../layout/layout.component";

/** Props */
import { KindCreateProps } from "./props";

/** Styles */
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";

/** Logic */
import { inputTypes, properties } from "../../atoms/input/logic/logic.types";
import { getLogic } from "./logic/logic.kind";

export const KindCreate: React.FC<KindCreateProps> = () => {
  const [place, property, description, setPlace, setProperty] = getLogic();

  return (
    <div>
      <div className={[space["m-b--45"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          What kind of place are you listing?
        </h3>
      </div>
      <div style={{ width: 250 }} className={[space["m-b--22"]].join(" ")}>
        <Layout type="input" title="First, let's narrow things down">
          <Input
            inputType="place"
            type="select"
            value={place}
            handleChange={(e) => {
              setPlace(e.target.value);
            }}
          />
        </Layout>
      </div>
      <div className={[space["m-b--8"]].join(" ")} style={{ width: 250 }}>
        <Layout type="input" title="Now choose a property type">
          <Input
            disabled={!place}
            inputType={place && place}
            type="select"
            value={property}
            handleChange={(e) => {
              setProperty(e.target.value);
            }}
          />
        </Layout>
      </div>
      {property && description && (
        <div>
          <div className={[space["m-t--16"]].join(" ")}>
            <h4 className={[font["size--14"], color["c--gray__0"]].join(" ")}>
              {description}
            </h4>
          </div>
          <div className={[space["m-v--32"]].join(" ")}>
            <Layout type="input" title="What will guests have?"></Layout>
          </div>
        </div>
      )}
    </div>
  );
};
