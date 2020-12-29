/** styles **/
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";

/** vectors */
import { Check } from "@svg/original";

export const SetCard: React.FC<{}> = () => {
  return (
    <div className={[shape["br--15"], color["b--white__2"]].join(" ")}>
      <div
        className={[
          shape["w--full"],
          shape["btr--15"],
          shape["h--8"],
          color["bg--green__1"],
        ].join(" ")}
      />
      <div className={[space["p--15"]].join(" ")}>
        <div className={[layout["flex"]].join(" ")}>
          <div className={[space["m-r--12"]].join(" ")}>
            <Check width={18} fill="#268A04" />
          </div>
          <div>
            <div className={[space["m-b--4"]].join(" ")}>
              <h3 className={[font["size--16"]].join(" ")}>You're all set!</h3>
            </div>
            <div>
              <p className={[font["size--14"], color["c--gray__1"]].join(" ")}>
                This helps us keep your account secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
