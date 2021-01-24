import Router from "next/router";

import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import shape from "@styles/shape.module.scss";

import { Button } from "@button";

import * as $button from "@button/variants";

/**
 * Renders the host card component
 * @param {string} imgUrl - Image of the host
 * @param {string} host - Name of the host
 * @param {string} stayType - Type of stay
 * @param {string} location - Location of the stay
 */
export const HostCard: React.FC<{
  imgUrl?: string;
  host?: string;
  stayType?: string;
  location?: string;
}> = ({ imgUrl, host = "Host", stayType = "Type", location = "Location" }) => {
  return (
    <div>
      <div>
        {imgUrl ? (
          <img
            className={[shape["br--20"]].join(" ")}
            style={{
              objectFit: "cover",
              height: 434,
              width: 350,
            }}
            src={imgUrl}
          />
        ) : (
          <div
            className={[shape["br--20"], color["bg--white__2"]].join(" ")}
            style={{ height: 434, width: 350 }}
          />
        )}
      </div>
      <div style={{ marginTop: 6 }}>
        <h3>{host}</h3>
      </div>
      <div className={[space["m-v--8"]].join(" ")}>
        <h4
          style={{ textTransform: "capitalize" }}
          className={[
            font["ls--4"],
            font["size--15"],
            color["c--gray__4"],
          ].join(" ")}
        >
          Hosts a {stayType} in {location}
        </h4>
      </div>
      <div>
        <Button
          onClick={() => Router.push("/")}
          variant={$button.UNDERLINE}
          title={`Check out some ${stayType}s`}
        />
      </div>
    </div>
  );
};
