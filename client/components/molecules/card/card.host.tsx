import React from "react";

/** Props */
import { HostCardProps } from "./props";

/** Styles */
import layout from "../../../styles/layout.module.scss";
import shape from "../../../styles/shape.module.scss";
import space from "../../../styles/space.module.scss";
import color from "../../../styles/color.module.scss";
import font from "../../../styles/font.module.scss";

/** Components */
import { Button } from "../../atoms/button/button.component";

/**
 * Renders the host card component
 * @param {string} imgUrl - Image of the host
 * @param {string} host - Name of the host
 * @param {string} stayType - Type of stay
 * @param {string} location - Location of the stay
 */
export const HostCard: React.FC<HostCardProps> = ({
  imgUrl = "https://a0.muscache.com/im/pictures/92acd468-73bf-4ca1-a956-277c4a94b3a3.jpg?im_q=highq&im_w=960",
  host = "Darrel",
  stayType = "tiny house",
  location = "Atlanta",
}) => {
  return (
    <div>
      <div>
        <img
          style={{
            height: 434,
            objectFit: "cover",
            width: 350,
            borderRadius: 12,
          }}
          src={imgUrl}
        />
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
        <Button to="/">
          <u>Check out some tiny houses</u>
        </Button>
      </div>
    </div>
  );
};
