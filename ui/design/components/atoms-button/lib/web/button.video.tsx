/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { web } from '../styles/button.video';
import { Pause, Play } from '@nextbnb/design/assets/svg/regular';
import { $Button } from '..';

const VideoButton: React.FC<{ play?: boolean }> = ({ play = false }) => {
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

export const video = (props) => {
  return {
    [$Button.VIDEO]: {
      component: <VideoButton {...props} />,
      css: {},
    },
  };
};
