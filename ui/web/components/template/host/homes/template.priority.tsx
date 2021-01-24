import responsive from "@styles/responsive.module.scss";
import space from "@styles/space.module.scss";

import { Layout } from "@layout";
import { Bullet } from "@bullet";

import * as bulletVariant from "@bullet/variants";

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const PriorityTemplate: React.FC<{}> = () => {
  return (
    <Layout variant="homes" title="Safety is our priority">
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
                <Bullet variant={bulletVariant.PRIORITY} priority={priority} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
