import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import animation from "@styles/animation.module.scss";

import { Button, $Button } from "@button";
import { useToggleDispatch } from "@context/toggle";

/**
 * Renders the Searchbar
 */
export const SearchBar: React.FC<{
  type?: string;
  selected?: string;
  setSelected?: (param: string) => void;
  transparent?: boolean;
}> = ({
  type = "stay",
  selected = null,
  setSelected = () => console.log("clicked"),
  transparent,
}) => {
  const dispatchToggle = useToggleDispatch();

  const types = {
    stay: (
      <div
        className={transparent ? [shape["shadow--sm"]].join(" ") : null}
        style={{
          border: "1px solid lightgray",
          display: "grid",
          gridTemplateColumns: `1.5fr 1px 1fr 1px  1fr 1px ${
            !selected ? "1.5fr" : "2fr"
          }`,
          borderRadius: 50,
          backgroundColor: "white",
        }}
      >
        <Option
          title="Where are you going?"
          subtitle="Location"
          selected={selected}
          setSelected={setSelected}
          name="location"
        />
        <Seperator />
        <Option
          title="Add dates"
          subtitle="Check in"
          selected={selected}
          setSelected={setSelected}
          name="checkin"
        />
        <Seperator />
        <Option
          title="Add dates"
          subtitle="Check out"
          selected={selected}
          setSelected={setSelected}
          name="checkout"
        />
        <Seperator />
        <button
          style={{
            display: "block",
            padding: "5px 8px 5px 24px",
            borderRadius: "50px",
          }}
          className={`${
            selected === "guests" && [shape["shadow--lg"]].join(" ")
          } ${[animation["hover-background--white__1"]].join(" ")}`}
          onClick={() => {
            setSelected("guests");
            dispatchToggle({ type: "toggle_guests" });
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: selected === "guests" && 50,
            }}
          >
            <div
              className={`${[layout["flex"], layout["items-center"]].join(
                " "
              )}`}
            >
              <div>
                <div>
                  <h3
                    className={[
                      font["text--left"],
                      font["no-wrap"],
                      font["size--12"],
                    ].join(" ")}
                  >
                    Guests
                  </h3>
                </div>
                <div>
                  <p
                    className={[
                      font["text--left"],
                      font["no-wrap"],
                      font["size--12"],
                    ].join(" ")}
                  >
                    Add guests
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant={$Button.SEARCH}
                onClick={() => alert("hello")}
                expand={selected}
              />
            </div>
          </div>
        </button>
      </div>
    ),
    experiences: (
      <div
        className={transparent ? [shape["shadow--sm"]].join(" ") : null}
        style={{
          border: "1px solid lightgray",
          display: "grid",
          gridTemplateColumns: `1fr 1px ${selected ? "1.25fr" : "1fr"}`,
          borderRadius: 50,
          backgroundColor: "white",
        }}
      >
        <Option
          title="Where are you going?"
          subtitle="Location"
          selected={selected}
          setSelected={setSelected}
          name="location"
        />
        <Seperator />

        <button
          style={{
            display: "block",
            padding: "5px 8px 5px 24px",
            borderRadius: "50px",
          }}
          className={`${
            selected === "checkin" && [shape["shadow--lg"]].join(" ")
          } ${[animation["hover-background--white__1"]].join(" ")}`}
          onClick={() => {
            setSelected("checkin");
            dispatchToggle({ type: "toggle_checkin" });
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: selected === "checkin" && 50,
            }}
          >
            <div
              className={`${[layout["flex"], layout["items-center"]].join(
                " "
              )}`}
            >
              <div>
                <div>
                  <h3
                    className={[
                      font["text--left"],
                      font["no-wrap"],
                      font["size--12"],
                    ].join(" ")}
                  >
                    Date
                  </h3>
                </div>
                <div>
                  <p
                    className={[
                      font["text--left"],
                      font["no-wrap"],
                      font["size--12"],
                    ].join(" ")}
                  >
                    Add when you want to go
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant={$Button.SEARCH}
                onClick={() => alert("hello")}
                expand={selected}
              />
            </div>
          </div>
        </button>
      </div>
    ),
  };

  return types[type];
};

const Seperator: React.FC<{}> = () => {
  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
      <div
        className={[color["bg--white__2"]].join(" ")}
        style={{ width: "100%", height: 25 }}
      ></div>
    </div>
  );
};

const Option: React.FC<{
  name: string;
  subtitle: string;
  title: string;
  selected: string;
  setSelected: (param: string) => void;
}> = ({ name, subtitle, title, selected, setSelected }) => {
  const dispatchToggle = useToggleDispatch();
  return (
    <button
      className={`${selected === name && [shape["shadow--lg"]].join(" ")} ${[
        animation["hover-background--white__1"],
      ].join(" ")}`}
      style={{
        display: "block",
        padding: "5px 24px",
        borderRadius: "50px",
      }}
      onClick={() => {
        setSelected(name);
        dispatchToggle({ type: `toggle_${name}` });
      }}
    >
      <div className={`${[layout["flex"], layout["items-center"]].join(" ")}`}>
        <div>
          <div>
            <h3 className={[font["text--left"], font["size--12"]].join(" ")}>
              {title}
            </h3>
          </div>
          <div>
            <p className={[font["text--left"], font["size--12"]].join(" ")}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};
