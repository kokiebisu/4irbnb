/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

export const LocationLayout: React.FC<{
  title?: string;
  content?: any;
}> = ({ title = "Recent Searches", content = <div>Content here</div> }) => {
  return (
    <div>
      <div css={{ margin: "8px 25px" }}>
        <h2
          css={{ fontSize: 10, textTransform: "uppercase" }}
          sx={{ color: "grey.800" }}
        >
          {title}
        </h2>
      </div>
      <div>{content}</div>
    </div>
  );
};
