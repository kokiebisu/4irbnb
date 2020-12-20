import React from "react";

/** components */
import { Input } from "../../atoms/input/input.component";

/** styles **/
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";

/**
 * Renders the /become-a-host/rules page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const RulesCreate: React.FC<{
  data?: any;
  setData?: (params: any) => void;
}> = ({ data = { details: [] }, setData }) => {
  const modify = (type: string, params: string) => {
    if (data[type].includes(params)) {
      setData({
        ...data,
        [type]: [...data[type]].filter((element) => element !== params),
      });
    } else {
      setData({
        ...data,
        [type]: [...data[type], params],
      });
    }
  };

  return (
    <div>
      <div>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          Set house rules for your guests
        </h3>
      </div>
      <div>
        <p className={[font["size--15"]].join(" ")}>
          Guests must agree to your house rules before they book.
        </p>
      </div>
      <div className={[space["m-b--22"]].join(" ")}>
        <div className={[space["m-v--12"]].join(" ")}>
          <Input
            variant="closed"
            title="Smoking allowed"
            data={data}
            setData={setData}
            value="smoking"
          />
        </div>
        <div className={[space["m-v--12"]].join(" ")}>
          <Input
            variant="closed"
            title="Events allowed"
            data={data}
            setData={setData}
            value="event"
          />
        </div>
      </div>
      <div className={[space["m-b--50"]].join(" ")}>
        <div className={[space["m-v--16"]].join(" ")}>
          <h3>Details guests must know about your home</h3>
        </div>
        {[
          {
            title: "Must climb stairs",
            item: "stairs",
          },
          {
            title: "Potential for noise",
            item: "noise",
          },
          {
            title: "Pet(s) live on property",
            item: "pets",
          },
        ].map(({ title, item }, index) => {
          return (
            <div key={index} className={[space["m-b--16"]].join(" ")}>
              <Input
                check={() => modify("details", item)}
                checked={data.details.includes(item)}
                variant="checkbox"
                title={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
