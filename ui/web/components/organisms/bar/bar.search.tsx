import { motion } from "framer-motion";

/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import animation from "@styles/animation.module.scss";
import responsive from "@styles/responsive.module.scss";

/** vectors */
import { Button } from "@button/button.component";
import { useToggleDispatch } from "@context/toggle";

/**
 * Renders the Searchbar
 */
export const SearchBar: React.FC<{
  selected?: string;
  setSelected?: (param: string) => void;
  category?: string;
  setCategory?: (param: string) => void;
  transparent?: boolean;
}> = ({
  selected = null,
  setSelected = () => console.log("clicked"),
  category,
  setCategory,
  transparent,
}) => {
  const dispatchToggle = useToggleDispatch();
  const types = {
    stay: {
      title: "Places to stay",
    },
    experiences: {
      title: "Experiences",
    },
    online: {
      title: "Online Experiences",
    },
  };

  return (
    <div>
      <div className={[space["m-b--16"], space["m-t--12"]].join(" ")}>
        <div className={[layout["flex"], layout["justify-center"]].join(" ")}>
          {Object.keys(types).map((type, index) => {
            return (
              <div key={index} className={[space["m-h--16"]].join(" ")}>
                <button onClick={() => setCategory("stay")}>
                  <div className={[space["p-b--8"]].join(" ")}>
                    <p
                      className={`${
                        transparent
                          ? [color["c--white"]].join(" ")
                          : [color["c--black"]].join(" ")
                      } ${[
                        responsive["size__12_to_14--md"],
                        responsive["weight__500_to_300--md"],
                      ].join(" ")}`}
                    >
                      {types[type].title}
                    </p>
                  </div>
                  <div
                    className={[layout["flex"], layout["justify-center"]].join(
                      " "
                    )}
                  >
                    {category === type && (
                      <motion.div
                        initial={{ width: 3 }}
                        animate={{ width: 15 }}
                        style={{
                          height: 2,
                          backgroundColor: transparent ? "white" : "black",
                        }}
                      />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
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
          title="Add dataes"
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
                variant="search"
                onClick={() => alert("hello")}
                expand={selected}
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
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
