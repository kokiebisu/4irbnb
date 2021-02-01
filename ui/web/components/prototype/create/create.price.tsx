import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";

import {
  Input,
  $Input,
} from "../components/organisms/modal/node_modules/@input";

export const PriceCreate: React.FC<{ setData?: any; data?: any }> = ({
  setData,
  data = {
    basePrice: undefined,
    currency: "USD",
  },
}) => {
  return (
    <div>
      <div className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--24"]].join(" ")}>
          <h3>Price your space</h3>
        </div>
        <div className={[space["m-b--24"]].join(" ")}>
          <div>
            <h3 className={[font["size--14"]].join(" ")}>
              Increase your chances of getting booked
            </h3>
          </div>
          <div>
            <h4 className={[font["size--14"]].join(" ")}>
              Set up Smart Pricing to automativally keep your nightly prices
              competitive as demand in your area changes.
            </h4>
          </div>
        </div>
        <div className={[space["m-b--24"]].join(" ")}>
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div className={[space["m-r--4"]].join(" ")}>
              <h2 className={[font["size--16"]].join(" ")}>
                Set up the same base price for each night
              </h2>
            </div>
            <div
              className={[
                space["p--3"],
                font["size--9"],
                color["bg--white__2"],
              ].join(" ")}
            >
              <h3>RECOMMENDED</h3>
            </div>
          </div>
          <div>
            <p className={[font["size--11"]].join(" ")}>
              A 14% guest service fee is added to every host's price--but
              sometimes the amount will vary, depending on the length of the
              trip.
            </p>
          </div>
          <div>
            <p
              className={[font["size--12"], color["c--darkgreen__3"]].join(" ")}
            >
              Learn what fees pay for
            </p>
          </div>
        </div>
        <div className={[space["m-b--24"]].join(" ")}>
          <div>
            <h3 className={[font["size--14"]].join(" ")}>Base price</h3>
          </div>
          <div className={[space["m-b--8"]].join(" ")}>
            <p className={[font["size--13"]].join(" ")}>
              This will be your default price.
            </p>
          </div>
          <div>
            <Input
              variant={$Input.PRICE}
              title="Base price"
              subtitle="This will be your default price gor days when you decide to turn off Smart Pricing."
              tip={17}
              name="basePrice"
              value={data.basePrice}
              handleChange={(e) => {
                const onlyNumbers = /^[0-9\b]+$/;
                if (e.target.value == "" || onlyNumbers.test(e.target.value)) {
                  setData({ ...data, basePrice: e.target.value });
                }
              }}
            />
          </div>
          <div className={[space["m-v--8"]].join(" ")}>
            <h4
              className={[color["c--darkgreen__3"], font["size--16"]].join(" ")}
            >
              Tip: $21
            </h4>
          </div>
        </div>
        <div>
          <div className={[space["m-b--8"]].join(" ")}>
            <h3 className={[font["size--14"]].join(" ")}>Currency</h3>
          </div>
          <div>
            <Input variant={$Input.SELECT} inputType="currency" />
          </div>
        </div>
      </div>
    </div>
  );
};
