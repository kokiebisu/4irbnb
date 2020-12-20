import React from "react";

/** vectors */
import {
  Checkin,
  Clock,
  Children,
  Parties,
  Smoking,
  Pets,
  Distancing,
  Caution,
  Check,
  Cleaning,
} from "@svg/original";

/** styles **/
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

/**
 * Renders the know bullet
 * @param {string} categoryType - Type of know bullet
 * @param {Object[]} checkin - Time range for checkin
 * @param {string} checkout - Time for checkin
 */
export const KnowBullet: React.FC<{
  categoryType?: string;
  checkin?: any;
  checkout?: string;
}> = ({
  categoryType = "checkin",
  checkin = { min: "3:00 p.m.", max: "12:00 a.m." },
  checkout = "11:00 a.m.",
}) => {
  const categories = {
    checkin: {
      icon: <Clock width={14} />,
      description: `Check-in: ${checkin.min}–${checkin.max}`,
    },
    checkout: {
      icon: <Clock width={14} />,
      description: `Checkout: ${checkout}`,
    },
    self: {
      icon: <Checkin width={14} />,
      description: "Self check-in with lockbox",
    },
    children: {
      icon: <Children width={14} />,
      description: "Not suitable for children and infants",
    },
    smoking: {
      icon: <Smoking width={14} />,
      description: "No smoking",
    },
    pets: {
      icon: <Pets width={14} />,
      description: "No pets",
    },
    parties: {
      icon: <Parties width={14} />,
      description: "No parties or events",
    },
    cleaning: {
      icon: <Cleaning width={14} />,
      description: "Committed to Airbnb's enhanced cleaning process.",
    },
    distancing: {
      icon: <Distancing width={14} />,
      description:
        "Airbnb's social-distancing and other COVID-19-related guidelines apply",
    },
    caution: {
      icon: <Caution width={14} />,
      description: "Nearby lake, river, other body of water",
    },
    check: {
      icon: <Check width={14} />,
      description: "Carbon monoxide alarm",
    },
  };
  return (
    <div className={[layout["flex"]].join(" ")}>
      <div className={[space["m-r--12"]].join(" ")}>
        {categories[categoryType].icon}
      </div>
      <div>
        <p className={[font["weight--100"], font["size--16"]].join(" ")}>
          {categories[categoryType].description}
        </p>
      </div>
    </div>
  );
};
