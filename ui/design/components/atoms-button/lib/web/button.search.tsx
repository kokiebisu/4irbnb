/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { MagnifyGlass } from "@nextbnb/design/assets/svg/original";
import { search } from "../styles/button.search";

const { web, theme } = search;

export const SearchButton: React.FC<{ expand?: boolean }> = ({
  expand = false,
}) => {
  return (
    <div
      css={web.wrapper}
      sx={theme.wrapper}
      style={{
        transitionDelay: expand ? "0s" : "0.25s",
        transition: "0.25s all ease",
        width: expand ? 95 : 40,
        height: 40,
        borderRadius: 50,
      }}
    >
      <div css={web.icon.wrapper}>
        <MagnifyGlass width={13} height={13} stroke="white" strokeWidth={4} />
      </div>
      <div
        style={{
          transition: "0.25s all ease",
          transitionDelay: expand ? "0.25s" : "0s",
          opacity: expand ? 1 : 0,
          visibility: expand ? "visible" : "hidden",
        }}
      >
        <p css={web.label.text} sx={theme.label.text}>
          Search
        </p>
      </div>
    </div>
  );
};
