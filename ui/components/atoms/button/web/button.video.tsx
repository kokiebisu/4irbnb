/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { video } from "../styles";
import { Pause, Play } from "../../../public/svg/regular";

const { web } = video;

export const VideoButton: React.FC<{ play?: boolean }> = ({ play = false }) => {
  return (
    <div css={web.wrapper}>
      {play ? (
        <Play width={15} height={15} />
      ) : (
        <Pause width={15} height={15} />
      )}
    </div>
  );
};
