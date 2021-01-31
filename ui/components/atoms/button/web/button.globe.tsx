/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { globe } from "../styles";

const { web, theme } = globe;

export const GlobeButton: React.FC<{
  language?: string;
  region?: string;
  selected?: boolean;
}> = ({ language = "Language", region = "Region", selected = false }) => {
  return (
    <div css={{ ...web.wrapper, ...(selected && web.selected.wrapper) }}>
      <div>
        <p css={web.language.text}>{language}</p>
      </div>
      <div>
        <p style={{ textAlign: "left" }} css={web.region.text}>
          {region}
        </p>
      </div>
    </div>
  );
};
