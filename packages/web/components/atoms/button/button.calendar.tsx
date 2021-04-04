/** styles */
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import animation from "@styles/animation.module.scss";
import color from "@styles/color.module.scss";

export const CalendarButton: React.FC<{
  disabled?: boolean;
  number?: number;
}> = ({ disabled = false, number }) => {
  return (
    <div style={{ width: 42, height: 42 }}>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
        className={`${[
          layout["flex"],
          layout["justify-center"],
          layout["items-center"],
          shape["br--circle"],
          ,
        ].join(" ")} ${disabled && animation["hover-border--black"]}`}
      >
        <h3
          className={`${
            disabled
              ? [color["c--black"]].join(" ")
              : [color["c--white__2"]].join(" ")
          } ${[font["size--12"]].join(" ")}`}
        >
          {number}
        </h3>
      </div>
    </div>
  );
};
