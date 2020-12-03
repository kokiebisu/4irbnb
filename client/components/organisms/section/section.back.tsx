import React from "react";

/** Styles */
import space from "../../../styles/space.module.scss";

/** Layout */
import { Layout } from "../../../layout/layout.component";

/** Components */
import { banner } from "../../../components/atoms/button/button.stories";
import { Bullet } from "../../../components/atoms/bullet/bullet.component";

/** Props */
import { BackSectionProps } from "./props";

export const BackSection: React.FC<BackSectionProps> = () => {
  const bullets = [undefined, undefined, undefined];
  return (
    <Layout
      type="section"
      sectionType="onlinehost"
      title="How hosts are sharing their world"
      subtitle="These hosts bring the spirit of experiences to the screen with unique small group activities to do together while we're apart."
    >
      <div
        className={[
          space["m-v--16"],
          banner["display__onlinehost--points"],
        ].join(" ")}
      >
        {bullets.map((bullet, index) => {
          return (
            <div key={index} className={[space["m-b--16"]].join(" ")}>
              <Bullet type="onlinehost" bullet={bullet} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
