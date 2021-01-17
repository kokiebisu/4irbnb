import { Header } from "@header";
import { Template } from "@template/s/experiences/online";
import layout from "@styles/layout.module.scss";

const OnlinePage = () => {
  return (
    <div>
      <div className={[layout["container--spread"]].join(" ")}>
        <Header variant="white" />
      </div>
      <div className={[layout["container--spread"]].join(" ")}>
        <Template variant="banner" />
      </div>
    </div>
  );
};

export default OnlinePage;
