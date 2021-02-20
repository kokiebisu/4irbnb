/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import { Input } from "@nextbnb/atoms-input";
import { Layout } from "@nextbnb/design/layout";
import { Bullet, $Bullet } from "@nextbnb/atoms-bullet";

export const ScenariosCreate: React.FC<{}> = () => {
  return (
    <div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 45 }}>
          <h3>Based on your settings, here's what you could expect</h3>
        </div>
        <div>
          {["available", "requirements", "confirmation", "welcome", "paid"].map(
            (type, index) => {
              return (
                <div key={index} css={{ marginBottom: 32 }}>
                  <Bullet variant={$Bullet.SCENARIO} type={type} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
