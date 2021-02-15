/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { menu } from "../styles/button.menu";
import { Avatar, Bars } from "@nextbnb/design/assets/svg/original";

const { web, theme } = menu;

/**
 * Renders the menu button components
 * @param {boolean} inverse - Whether if the button takes the inverse styling or not
 */
export const MenuButton: React.FC<{
  authenticated?: boolean;
  data?: {
    imgUrl: string;
  };
  inverse?: boolean;
}> = ({
  authenticated = false,
  data = {
    imgUrl:
      "https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fGZhY2V8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60",
  },
  inverse = false,
}) => {
  return (
    <div
      css={web.wrapper}
      sx={inverse ? theme.wrapper.inverse : theme.wrapper.plain}
    >
      <div css={web.icon.wrapper}>
        <Bars fill="black" width={12} />
      </div>
      <div>
        {authenticated && data ? (
          <img css={web.avatar} src={data.imgUrl} />
        ) : (
          <Avatar width={30} fill="gray" />
        )}
      </div>
    </div>
  );
};
