import React from "react";

/** props */
import { WorksSectionProps } from "./props";

/** Layouts */
import { Layout } from "../../../layout/layout.component";

/** styles **/
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";

/** components */
import { Button } from "../../atoms/button/button.component";
import { Card } from "../../molecules/card/card.component";

/** stories */
import { border } from "../../../components/atoms/button/button.stories";

export const WorksSection: React.FC<WorksSectionProps> = () => {
  const categories = ["design", "share", "submit", "setup"];
  return (
    <div>
      <Layout type="section" sectionType="homes" title="How hosting works">
        <div>
          {categories.map((category, index) => {
            return (
              <div className={[space["m-b--8"]].join(" ")} key={index}>
                <Card variant="works" work={category} />
              </div>
            );
          })}
        </div>
        <div
          className={[
            space["m-t--32"],
            layout["flex"],
            layout["justify-center"],
          ].join(" ")}
        >
          <Button
            {...border.args}
            bold
            title="Start creating your experience"
          />
        </div>
      </Layout>
    </div>
  );
};
