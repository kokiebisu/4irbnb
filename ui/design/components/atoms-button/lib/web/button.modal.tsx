/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { modal } from "../styles/button.modal";
import { Close } from "@nextbnb/design/public/svg/original";
import { ChevronLeft } from "@nextbnb/design/public/svg/regular";

const { web, theme } = modal;

/**
 * Renders the close button component
 * @param {function} onClick - The action taken when the button is pressed
 */
export const ModalButton: React.FC<{ modal?: string }> = ({
  modal = "close",
}) => {
  const types: { [type: string]: JSX.Element } = {
    close: <Close width={16} height={16} stroke="black" strokeWidth={2} />,
    back: <ChevronLeft width={16} height={16} stroke="black" strokeWidth={4} />,
  };
  return (
    <div css={web.wrapper} sx={theme.wrapper}>
      {types[modal]}
    </div>
  );
};
