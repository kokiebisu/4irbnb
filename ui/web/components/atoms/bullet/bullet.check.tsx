/** styles */
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";

/** vectors */
import { CheckPlain } from "@svg/original";

export const CheckBullet: React.FC<{ title?: string }> = ({
  title = "Title here",
}) => {
  return (
    <div className={[layout["flex"], layout["items-center"]].join(" ")}>
      <div className={[space["m-r--8"]].join(" ")}>
        <CheckPlain width={24} strokeWidth={2} stroke="green" />
      </div>
      <div>
        <h4 className={[font["size--18"], color["c--gray__1"]].join(" ")}>
          {title}
        </h4>
      </div>
    </div>
  );
};
