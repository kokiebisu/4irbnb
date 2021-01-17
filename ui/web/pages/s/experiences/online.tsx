import { Header } from "@header";
import { Template } from "@template/s/experiences/online";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";

const OnlinePage = () => {
  return (
    <div>
      <div
        className={[layout["container--spread"], shape["shadow--sm"]].join(" ")}
      >
        <Header variant="white" />
      </div>
      <div className={[layout["container--spread"], space["m-v--8"]].join(" ")}>
        <Template variant="banner" />
      </div>
      <div>filter</div>
      <div className={[layout["container--spread"], space["m-y--8"]].join(" ")}>
        <Template variant="cards" />
      </div>
      <div className={[layout["container--spread"], space["m-y--8"]].join(" ")}>
        <Template variant="cards" />
      </div>
    </div>
  );
};

export default OnlinePage;
