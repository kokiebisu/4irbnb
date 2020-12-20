import React from "react";

/** styles **/
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import card from "@card/card.module.scss";

/** Logic */
import { getWorkContent } from "./logic/logic.work";

export const WorksCard: React.FC<{
  work?: string;
}> = ({ work = "design" }) => {
  const works = getWorkContent();
  return (
    <div>
      <div className={[card["display__works"]].join(" ")}>
        <div className={[card["w__works"]].join(" ")}>
          <img src={works[work].imgUrl} alt="works image" />
        </div>
        <div className={[card["w__works"]].join(" ")}>
          <div className={[space["m-b--16"]].join(" ")}>
            <h3>{works[work].title}</h3>
          </div>
          <div>
            <p className={[font["size--13"]].join(" ")}>
              {works[work].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
