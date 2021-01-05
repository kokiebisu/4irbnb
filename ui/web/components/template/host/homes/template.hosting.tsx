/** styles */
import responsive from "@styles/responsive.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";

/** components */
import { Layout } from "@layout";
import { Card } from "@card";

/** types */
import { types } from "@card/card.hosting";

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const HostingTemplate: React.FC<{}> = () => {
  return (
    <Layout variant="homes" title="How hosting works">
      <div className={[space["m-t--16"]].join(" ")}>
        <div
          style={{
            width: "100%",
          }}
          className={[responsive["b_to_f--sm"], layout["flex"]].join(" ")}
        >
          {Object.keys(types).map((type, index) => {
            return (
              <div
                key={index}
                style={{ width: "25%" }}
                className={[space["m-b--64"]].join(" ")}
              >
                <Card variant="hosting" type={type} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
