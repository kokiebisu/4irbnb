/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const OnlineHostLayout: React.FC<{
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
}> = ({ title, subtitle, children, dark = false, spread = false }) => {
  return (
    <div
      css={{
        alignItems: "center",
        flexDirection: "column",
      }}
      sx={{
        display: ["block", "block", "flex"],
      }}
    >
      <div
        css={{
          display: ["block", "block", "flex"],
          flexDirection: "column",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        {title && (
          <div>
            <h3 sx={{ ...(dark && { color: "white" }) }}>{title}</h3>
          </div>
        )}
        {subtitle && (
          <div css={{ marginTop: 16 }}>
            <p sx={{ ...(dark && { color: "white" }) }}>{subtitle}</p>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
