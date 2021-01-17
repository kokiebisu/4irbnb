import { Header } from "@header";
import { Bar } from "@bar";
import { Template } from "@template/s/experiences/online";

import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";

const OnlinePage = () => {
  return (
    <div>
      <div className={[shape["shadow--sm"]].join(" ")}>
        <div className={[layout["container--spread"]].join(" ")}>
          <Header variant="white" />
        </div>
      </div>
      <div className={[space["m-v--8"]].join(" ")}>
        <div className={[layout["container--spread"]].join(" ")}>
          <Template variant="banner" />
        </div>
      </div>
      <div style={{ position: "sticky", top: 0, zIndex: 50 }}>
        <div className={[color["bg--white"]].join(" ")}>
          <div
            className={[layout["container--spread"], space["p-v--16"]].join(
              " "
            )}
          >
            <Bar variant="filters" />
          </div>
          <div
            className={[color["bg--white__2"]].join(" ")}
            style={{
              width: "100%",
              height: 1,
            }}
          />
        </div>
      </div>
      <div
        className={[
          layout["container--spread"],
          space["m-b--12"],
          space["m-t--20"],
        ].join(" ")}
      >
        <Template variant="cards" />
      </div>
      <div
        className={[layout["container--spread"], space["m-v--12"]].join(" ")}
      >
        <Template variant="cards" />
      </div>
    </div>
  );
};

export default OnlinePage;
