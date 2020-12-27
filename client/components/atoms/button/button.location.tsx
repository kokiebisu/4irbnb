import React from "react";

/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

export const LocationButton: React.FC<{
  type?: "explore" | "recent";
  location?: string;
  from?: string;
  to?: string;
  guests?: number | null;
}> = ({ type = "explore", location, from, to, guests }) => {
  const types = {
    explore: {
      icon: (
        <img
          style={{ borderRadius: 5, verticalAlign: "bottom" }}
          src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq"
        />
      ),
      title: "Explore nearby destinations",
    },
    recent: {
      icon: (
        <div
          style={{
            borderRadius: 5,
            backgroundColor: "lightgray",
            width: "100%",
            height: "100%",
          }}
        ></div>
      ),
      title: `${location} · Stays`,
    },
  };

  return (
    <div
      className={[layout["flex"], layout["items-center"], space["p-v--8"]].join(
        " "
      )}
    >
      <div className={[space["m-r--16"]].join(" ")}>
        <div style={{ width: 40, height: 40 }}>{types[type].icon}</div>
      </div>
      <div>
        <div>
          <h4 className={[font["text--left"], font["size--15"]].join(" ")}>
            {types[type].title}
          </h4>
        </div>
        {type === "recent" && (
          <div>
            <h4
              className={[
                font["text--left"],
                font["size--10"],
                color["c--gray__0"],
              ].join(" ")}
            >
              {from ? from : ""}
              {to ? ` - ${to}` : ""}
              {guests
                ? guests > 0
                  ? ` · ${guests} guests`
                  : ` · ${guests} guest`
                : ""}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
