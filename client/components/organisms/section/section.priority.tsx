import React from "react";

/** styles */
import responsive from "../../../styles/responsive.module.scss";

/** components */
import { Layout } from "../../../layout/layout.component";
import { Bullet } from "../../../components/atoms/bullet/bullet.component";

/** props */
import { PrioritySectionProps } from "./props";

/** styles */
import space from "../../../styles/space.module.scss";

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const PrioritySection: React.FC<PrioritySectionProps> = () => {
  return (
    <Layout type="section" sectionType="homes" title="Safety is our priority">
      <div className={[space["m-t--16"]].join(" ")}>
        <div
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: 12,
          }}
          className={[responsive["b_to_g--sm"]].join(" ")}
        >
          {["protection", "guidance", "requirements"].map((priority, index) => {
            return (
              <div key={index} className={[space["m-b--64"]].join(" ")}>
                <Bullet type="priority" priority={priority} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
