import { Button, $Button } from "@button";

import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

/**
 * Renders the available card component
 * @param {string} date - The date which the experience is available
 * @param {string} from - The time which the experience starts
 * @param {string} to - The time which the experience ends
 * @param {string} standard - The time standard
 * @param {number} price - The price of the experience
 */
export const AvailableCard: React.FC<{
  date?: string;
  from?: string;
  to?: string;
  standard?: string;
  price?: number;
}> = ({
  date = "Tue., Nov. 10",
  from = "1:00 a.m. ",
  to = "3:00 a.m. ",
  standard = "PST",
  price = 31,
}) => {
  return (
    <div
      className={[space["p--24"], color["b--white__2"], shape["br--6"]].join(
        " "
      )}
    >
      <div className={[space["m-b--6"]].join(" ")}>
        <h3 className={[font["size--15"]].join(" ")}>{date}</h3>
      </div>
      <div>
        <p className={[font["size--14"]].join(" ")}>
          {from} - {to} {standard}
        </p>
      </div>
      <div className={[space["m-v--8"]].join(" ")}>
        <u className={[font["size--14"]].join(" ")}>Book for a private group</u>
      </div>
      <div className={[space["m-v--16"]].join(" ")}>
        <span className={[font["size--15"]].join(" ")}>
          <b>${price}</b>
        </span>
        <span className={[font["size--15"]].join(" ")}> /person</span>
      </div>
      <div className={[layout["inline-block"]].join(" ")}>
        <Button variant={$Button.PRIMARY} size="sm" title="Choose" />
      </div>
    </div>
  );
};
