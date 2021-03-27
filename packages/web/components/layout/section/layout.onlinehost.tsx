/** styles */
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import responsive from "@styles/responsive.module.scss";

export const OnlineHostLayout: React.FC<{
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
}> = ({ title, subtitle, children, dark = false, spread = false }) => {
  return (
    <div
      className={[
        responsive["b_to_f--sm"],
        layout["flex-col"],
        layout["items-center"],
      ].join(" ")}
    >
      <div
        className={[
          responsive["b_to_f--sm"],
          layout["flex-col"],
          layout["items-center"],
          space["p-v--16"],
        ].join(" ")}
      >
        {title && (
          <div>
            <h3
              className={`${[layout["font__onlinehost--title"]].join(" ")} ${
                dark ? [color["c--white"]].join(" ") : [].join(" ")
              }`}
            >
              {title}
            </h3>
          </div>
        )}
        {subtitle && (
          <div className={[space["m-t--16"]].join(" ")}>
            <p
              className={`${[layout["font__onlinehost--subtitle"]].join(" ")} ${
                dark ? [color["c--white"]].join(" ") : [].join(" ")
              }`}
            >
              {subtitle}
            </p>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
