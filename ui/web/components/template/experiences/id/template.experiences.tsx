import { Bullet } from "@bullet";

import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";

import * as bulletVariant from "@bullet/variants";

/**
 * Renders the experiences section
 */
export const ExperiencesTemplate: React.FC<{}> = () => {
  const experiences = ["hosts", "activities", "global"];
  return (
    <div className={[space["m-v--32"]].join(" ")}>
      <div className={[space["m-b--24"]].join(" ")}>
        <h3 className={[font["size--32"]].join(" ")}>
          Airbnb Online Experiences
        </h3>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: 15,
        }}
      >
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
              <Bullet
                variant={bulletVariant.EXPERIENCE}
                experience={experience}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
