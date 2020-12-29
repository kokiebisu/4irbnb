/** styles */
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

/** components */
import { Button } from "@button/button.component";
import { primary } from "@button/button.stories";

export const CreateBar: React.FC<{
  next?: () => void;
  back?: () => void;
  criteria?: boolean;
}> = ({
  next = () => alert("next button pressed"),
  back = () => alert("back button pressed"),
  criteria = true,
}) => {
  return (
    <div
      className={[color["b-t--white__1"], space["p-v--16"]].join(" ")}
      style={{ width: "100%" }}
    >
      <div
        className={[
          shape["w-full"],
          layout["flex"],
          layout["items-center"],
          layout["justify-between"],
        ].join(" ")}
      >
        <div>
          <Button variant="back" onClick={back} />
        </div>
        <div>
          <Button
            {...primary.args}
            title="Next"
            size="md"
            fill="#018489"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};
