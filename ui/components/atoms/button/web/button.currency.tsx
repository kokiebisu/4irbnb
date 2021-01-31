/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { currency } from "../styles";

const { web, theme } = currency;

export const CurrencyButton: React.FC<{
  name?: string;
  abbreviation?: string;
  symbol?: string;
}> = ({ name = "Canadian Dollar", abbreviation = "CAD", symbol = "$" }) => {
  return (
    <div css={web.wrapper}>
      <div>
        <p css={web.title.text}>{name}</p>
      </div>
      <div>
        <p style={{ textAlign: "left" }} css={web.subtitle.text}>
          <span>{abbreviation}</span>
          <span> - </span>
          <span>{symbol}</span>
        </p>
      </div>
    </div>
  );
};
