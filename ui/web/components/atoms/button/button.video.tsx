import { Pause, Play } from "@svg/regular";
import shape from "@styles/shape.module.scss";
import animation from "@styles/animation.module.scss";

export const VideoButton = ({ play = false }) => {
  return (
    <div className={[shape["br--circle"], animation["hover--blur"]].join(" ")}>
      {play ? (
        <Play width={15} height={15} />
      ) : (
        <Pause width={15} height={15} />
      )}
    </div>
  );
};
