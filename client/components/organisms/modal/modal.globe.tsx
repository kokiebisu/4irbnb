import React from "react";

/** components */
import { Button } from "../../../components/atoms/button/button.component";

/** styles */
import layout from "../../../styles/layout.module.scss";
import space from "../../../styles/space.module.scss";
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";

/** templates */
import { Template } from "../../../components/templates/template.component";

/** contexts */
import { useToggleDispatch } from "../../../context/toggle";

export const GlobeModal: React.FC<{}> = () => {
  const toggleDispatch = useToggleDispatch();
  return (
    <div
      className={[
        shape["h--full"],
        shape["shadow--lg"],
        shape["br--16"],
        color["bg--white"],
      ].join(" ")}
    >
      <div className={[space["p--12"]].join(" ")}>
        <div>
          <Button
            type="modal"
            modal="close"
            onPress={() => toggleDispatch({ type: "toggle_globe" })}
          />
        </div>
      </div>
      <div className={[space["p-h--20"], space["p-v--8"]].join(" ")}>
        <Template type="language" />
      </div>
    </div>
  );
};
