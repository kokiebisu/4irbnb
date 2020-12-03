import React from "react";

import layout from "../../../styles/layout.module.scss";
import { WorksSectionProps } from "./props";
import { Layout } from "../../../layout/layout.component";
import { Card } from "../../molecules/card/card.component";
import space from "../../../styles/space.module.scss";
import { Button } from "../../atoms/button/button.component";

export const WorksSection: React.FC<WorksSectionProps> = () => {
  const categories = ["design", "share", "submit", "setup"];
  return (
    <div>
      <Layout type="section" sectionType="homes" title="How hosting works">
        <div>
          {categories.map((category, index) => {
            return (
              <div className={[space["m-b--8"]].join(" ")} key={index}>
                <Card type="works" work={category} />
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
          <Button type="border" bold title="Start creating your experience" />
        </div>
      </Layout>
    </div>
  );
};
