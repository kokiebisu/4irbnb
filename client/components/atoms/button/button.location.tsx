import React from "react";

/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

export const LocationButton: React.FC<
  {
    type: "explore";
  } & {
    type: "recent";
    location: string;
    from?: string;
    to?: string;
    guests?: number;
  }
> = ({
  type = "explore",
  location = "Whistler",
  from = "Jan. 7",
  to = "Jan. 15",
  guests = 2,
}) => {
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
      icon: "",
      location,
      from,
      to,
      guests,
    },
  };

  return (
    <div className={[layout["flex"], layout["items-center"]].join(" ")}>
      <div className={[space["m-r--16"]].join(" ")}>
        <div style={{ width: 40 }}>{types[type].icon}</div>
      </div>
      <div>
        <div>
          <h4 className={[font["size--15"]].join(" ")}>{types[type].title}</h4>
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
              {from} - {to} · {guests} {guests > 1 ? "guests" : "guest"}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
