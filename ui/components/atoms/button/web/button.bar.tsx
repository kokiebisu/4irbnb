/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { bar } from "../styles";
import { MenuBarLogo } from "../../../public/svg/logo";
import { Login, Saved } from "../../../public/svg/regular";

const { web, theme } = bar;

export const BarButton: React.FC<{ type?: string; selected?: boolean }> = ({
  type = "explore",
  selected = false,
}) => {
  const types: {
    [type: string]: {
      component: JSX.Element;
      name: string;
    };
  } = {
    explore: {
      component: <MenuBarLogo width={25} />,
      name: "Explore",
    },
    saved: { component: <Saved width={25} />, name: "Saved" },
    login: { component: <Login width={25} />, name: "Log in" },
  };
  return (
    <div
      css={{
        ...(selected
          ? { ...web.wrapper, ...web.selected }
          : { ...web.wrapper }),
      }}
      sx={theme.wrapper}
    >
      <div css={web.logo.wrapper}>{types[type].component}</div>
      <div css={web.label.wrapper}>
        <p css={web.label.text}>{types[type].name}</p>
      </div>
    </div>
  );
};
