import { motion } from "framer-motion";

/** styles */
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import layout from "@styles/layout.module.scss";
import responsive from "@styles/responsive.module.scss";
import color from "@styles/color.module.scss";

/** context */
import { useToggleState } from "@context/toggle";

/** components */
import { Bar } from "@organisms/bar/bar.component";
import { Modal } from "@organisms/modal/modal.component";

export const StayPrototype: React.FC<{
  selected?: any;
  setSelected?: any;
  category?: any;
  setCategory?: any;
  transparent?: boolean;
}> = ({ selected, setSelected, category, setCategory, transparent }) => {
  const toggleState = useToggleState();

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
    <div className={[layout["relative"]].join(" ")}>
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
      <Bar
        variant="search"
        selected={selected}
        setSelected={setSelected}
        category={category}
        setCategory={setCategory}
        extendsTo={[space["p-h--12"]].join(" ")}
        transparent={transparent}
      />
      <div
        style={{
          position: "absolute",
          top: 110,
          left: 0,
          zIndex: 80,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Modal
          variant="location"
          dispatch="toggle_location"
          extendsTo={[shape["w--full"]].join(" ")}
          criteria={toggleState.location}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 110,
          left: 0,
          zIndex: 80,
          width: "100%",
          maxWidth: 720,
        }}
      >
        <Modal
          variant="check"
          dispatch="toggle_check"
          extendsTo={[shape["w--full"]].join(" ")}
          criteria={toggleState.check}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 110,
          right: 0,
          zIndex: 80,
          width: "100%",
          maxWidth: 325,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Modal
          variant="guests"
          dispatch="toggle_guests"
          extendsTo={[shape["w--full"]].join(" ")}
          criteria={toggleState.guests}
        />
      </div>
    </div>
  );
};
