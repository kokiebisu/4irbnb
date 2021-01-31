/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { loading } from "../styles";

const { web, theme } = loading;

export const LoadingAnimation: React.FC<{
  dark?: boolean;
}> = ({ dark }) => {
  return (
    <div css={web.wrapper}>
      <span
        sx={{ ...(dark ? { bg: "black" } : { bg: "white" }) }}
        css={{
          ...web.content,
          ...web.first,
        }}
      />
      <span
        sx={{ ...(dark ? { bg: "black" } : { bg: "white" }) }}
        css={{
          ...web.content,
          ...web.second,
        }}
      />
      <span
        sx={{ ...(dark ? { bg: "black" } : { bg: "white" }) }}
        css={{
          ...web.content,
          ...web.third,
        }}
      />
    </div>
  );
};
