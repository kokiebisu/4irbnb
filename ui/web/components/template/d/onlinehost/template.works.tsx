import { Layout } from "@layout";

import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";

import { Button } from "@button";
import { Card } from "@card";

import * as buttonVariant from "@button/variants";

export const WorksTemplate: React.FC<{}> = () => {
  const categories = ["design", "share", "submit", "setup"];
  return (
    <div>
      <Layout variant="homes" title="How hosting works">
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
            variant={buttonVariant.BORDER}
            bold
            title="Start creating your experience"
          />
        </div>
      </Layout>
    </div>
  );
};
