/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const LandingLayout: React.FC<{
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
}> = ({ title, subtitle, children, dark = false, spread = false }) => {
  return (
    <div css={{ padding: "25px" }} sx={{ ...(dark && { bg: "black" }) }}>
      <div
        css={{ ...(spread ? {} : {}) }}
        sx={{ ...(dark && { bg: "black" }) }}
        className={`${
          spread
            ? [layout["container--spread"]].join(" ")
            : [layout["container"]].join(" ")
        }  ${dark ? [color["bg--black"]].join(" ") : [].join(" ")}`}
      >
        <div css={{ padding: "16px 0" }}>
          {title && <h3 sx={{ ...(dark && { color: "white" }) }}>{title}</h3>}
          {subtitle && (
            <div css={{ width: 450 }}>
              <p sx={{ ...(dark && { color: "white" }) }}>{subtitle}</p>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
