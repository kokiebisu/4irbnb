/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { location } from "../styles/button.location";

const { web, theme } = location;

export const LocationButton: React.FC<{
  type?: "explore" | "recent";
  location?: string;
  from?: string;
  to?: string;
  guests?: number | null;
}> = ({
  type = "explore",
  location = "Location",
  from = "from",
  to = "to",
  guests = "1",
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
    <div css={web.wrapper}>
      <div css={web.icon.wrapper}>
        <div style={{ width: 40, height: 40 }}>{types[type].icon}</div>
      </div>
      <div>
        <div css={web.title.wrapper}>
          <h4 style={{ textAlign: "left" }} css={web.title.text}>
            {types[type].title}
          </h4>
        </div>
        {type === "recent" && (
          <div>
            <h4 css={web.guests.text} style={{ textAlign: "left" }}>
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
