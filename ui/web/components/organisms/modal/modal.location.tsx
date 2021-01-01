/** styles */
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";

/** templates */
import { Template } from "@template";

export const LocationModal: React.FC<{}> = () => {
  return (
    <div
      className={[
        shape["shadow--sm"],
        shape["br--20"],
        space["p-v--25"],
        color["bg--white"],
      ].join(" ")}
    >
      <Template variant="location" />
    </div>
  );
};
