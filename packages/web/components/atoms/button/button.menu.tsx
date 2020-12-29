/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import animation from "@styles/animation.module.scss";

/** vectors */
import { Avatar, Bars } from "@svg/original";

/**
 * Renders the menu button components
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
export const MenuButton: React.FC<{
  authenticated?: boolean;
  data?: {
    imgUrl: string;
  };
  inverse?: boolean;
}> = ({
  authenticated = false,
  data = {
    imgUrl:
      "https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fGZhY2V8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60",
  },
  inverse = false,
}) => {
  return (
    <div
      className={`${
        inverse
          ? [color["b-2--transparent"]].join(" ")
          : [color["b-2--white__2"]].join(" ")
      } ${[
        layout["flex"],
        layout["items-center"],
        space["p-v--4"],
        space["p-l--10"],
        space["p-r--6"],
        color["bg--white"],
        shape["br--30"],
      ].join(" ")}`}
    >
      <div className={[space["m-r--10"]].join(" ")}>
        <Bars fill="black" width={12} />
      </div>
      <div>
        {authenticated && data ? (
          <img
            className={[
              shape["br--circle"],
              shape["w--30"],
              layout["vertical--bottom"],
            ].join(" ")}
            style={{ width: 30, verticalAlign: "bottom" }}
            src={data.imgUrl}
          />
        ) : (
          <Avatar width={30} fill="gray" />
        )}
      </div>
    </div>
  );
};
