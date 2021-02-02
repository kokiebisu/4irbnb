/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { bar } from "../styles";
import { MenuBarLogo } from "@svg/logo";
import { Login, Saved } from "@svg/regular";

const { web, theme } = bar;

export const BarButton: React.FC<{ type?: string }> = ({
  type = "explore",
}) => {
  const types: {
    [type: string]: {
      component: JSX.Element;
      name: string;
      selected: boolean;
    };
  } = {
    explore: {
      component: <MenuBarLogo width={25} />,
      name: "Explore",
      selected: true,
    },
    saved: { component: <Saved width={25} />, name: "Saved", selected: false },
    login: { component: <Login width={25} />, name: "Log in", selected: false },
  };
  return (
    <div
      css={{
        ...(types[type].selected
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
