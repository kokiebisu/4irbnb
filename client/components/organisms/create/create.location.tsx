import React from "react";

/** components */
import { Input } from "../../../components/atoms/input/input.component";
import { Layout } from "../../../layout/layout.component";

/** styles **/
import font from "../../../styles/font.module.scss";
import color from "../../../styles/color.module.scss";
import space from "../../../styles/space.module.scss";
import layout from "../../../styles/layout.module.scss";

/**
 * Renders the /become-a-host/location page content
 * @param {object} data - Input data
 * @param {function} setData - Changes the input data
 */
export const LocationCreate: React.FC<{
  data?: any;
  setData?: (params: any) => void;
}> = ({ data, setData }) => {
  return (
    <div>
      <div className={[space["m-b--8"]].join(" ")}>
        <h3 className={[font["size--28"], color["c--gray__2"]].join(" ")}>
          Where's your place located?
        </h3>
      </div>
      <div className={[space["m-b--16"]].join(" ")}>
        <p className={[font["size--14"], color["c--gray__2"]].join(" ")}>
          Guests will only get your exact address once they've booked a
          reservation.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: 15,
        }}
        className={[space["m-t--32"], space["m-b--18"]].join(" ")}
      >
        <div className={[space["m-b--8"]].join(" ")}>
          <div className={[space["m-b--8"]].join(" ")}>
            <p className={[font["size--14"]].join(" ")}>Country</p>
          </div>
          <Input
            variant="select"
            handleChange={(e) => setData({ ...data, country: e.target.value })}
            value={data?.country}
            inputType="country"
          />
        </div>
        <div className={[space["m-b--8"]].join(" ")}>
          <div className={[space["m-b--8"]].join(" ")}>
            <p className={[font["size--14"]].join(" ")}>Postal Code</p>
          </div>
          <Input
            name="postal"
            variant="text"
            handleChange={(e) => setData({ ...data, postal: e.target.value })}
            value={data?.postal}
          />
        </div>
      </div>
      <div className={[space["m-b--30"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          <p className={[font["size--14"]].join(" ")}>Street</p>
        </div>
        <div>
          <Input
            name="street"
            variant="text"
            handleChange={(e) => setData({ ...data, street: e.target.value })}
            value={data?.street}
          />
        </div>
        <div className={[space["m-t--4"]].join(" ")}>
          <p className={[font["size--10"]].join(" ")}>
            e.g. 111108 108th Avenue
          </p>
        </div>
      </div>
      <div className={[space["m-b--8"]].join(" ")}>
        <div className={[space["m-b--8"]].join(" ")}>
          <p className={[font["size--14"]].join(" ")}>Apt, Suite (optional)</p>
        </div>
        <div>
          <Input
            name="apt"
            variant="text"
            handleChange={(e) => setData({ ...data, apt: e.target.value })}
            value={data?.apt}
          />
        </div>
        <div className={[space["m-t--4"]].join(" ")}>
          <p className={[font["size--10"]].join(" ")}>e.g. Suite #7</p>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: 15,
        }}
        className={[space["m-t--32"], space["m-b--18"]].join(" ")}
      >
        <div className={[space["m-b--8"]].join(" ")}>
          <div className={[space["m-b--8"]].join(" ")}>
            <p className={[font["size--14"]].join(" ")}>City</p>
          </div>
          <div>
            <Input
              variant="text"
              handleChange={(e) => setData({ ...data, city: e.target.value })}
              value={data?.city}
              inputType="city"
            />
          </div>
          <div className={[space["m-t--4"]].join(" ")}>
            <p className={[font["size--10"]].join(" ")}>e.g. Edmonton</p>
          </div>
        </div>
        <div className={[space["m-b--8"]].join(" ")}>
          <div className={[space["m-b--8"]].join(" ")}>
            <p className={[font["size--14"]].join(" ")}>State</p>
          </div>
          <div>
            <Input
              name="state"
              variant="text"
              handleChange={(e) => setData({ ...data, state: e.target.value })}
              value={data?.state}
            />
          </div>
          <div className={[space["m-t--4"]].join(" ")}>
            <p className={[font["size--10"]].join(" ")}>e.g. Alberta</p>
          </div>
        </div>
      </div>
    </div>
  );
};
