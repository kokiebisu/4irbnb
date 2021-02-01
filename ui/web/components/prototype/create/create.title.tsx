import {
  Input,
  $Input,
} from "../components/organisms/modal/node_modules/@input";

import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

/**
 * Renders the /become-a-host/title
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const TitleCreate: React.FC<{ data?: any; setData?: any }> = ({
  data = { title: "Title here" },
  setData,
}) => {
  return (
    <div>
      <div className={[space["m-b--12"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          Create a title for your listing
        </h3>
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Catch guests' attention with a listing title that highlights what
          makes your place special.
        </p>
      </div>
      <div className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          <Input
            variant={$Input.LIMIT}
            limit={50}
            value={data.title}
            handleChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
