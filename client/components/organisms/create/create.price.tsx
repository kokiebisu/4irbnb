import React from "react";

/** styles */
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";

/** components */
import { Input } from "@input/input.component";
import { Layout } from "@layout/layout.component";

export const PriceCreate: React.FC<{ setData?: any; data?: any }> = ({
  setData,
  data = {
    basePrice: undefined,
    minPrice: undefined,
    maxPrice: undefined,
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
        <div>
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div className={[space["m-r--4"]].join(" ")}>
              <h2 className={[font["size--16"]].join(" ")}>
                Set up Smart Pricing
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
        <div>
          <Input
            variant="price"
            title="Base price"
            subtitle="This will be your default price gor days when you decide to turn off Smart Pricing."
            tip={17}
          />
        </div>
      </div>
    </div>
  );
};
