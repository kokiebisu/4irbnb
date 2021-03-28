import { useRef, useState } from "react";

import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import layout from "@styles/layout.module.scss";

import { useToggleState } from "@context/toggle";

import { Bar, $Bar } from "@bar";
import { Modal } from "@modal";

import { useOnClickOutside } from "@hooks/useOnClickOutside";

export interface PrototypeProps {
  expanded?: boolean;
  setExpanded?: any;
  type?: any;
  setCategory?: any;
  transparent?: boolean;
}

export const Prototype: React.FC<PrototypeProps> = ({
  type,
  setCategory,
  transparent = false,
  expanded,
  setExpanded,
}) => {
  const toggleState = useToggleState();
  const [selected, setSelected] = useState(null);
  const containerRef = useRef();

  useOnClickOutside(containerRef, () => {
    if (selected) {
      setSelected(!selected);
    }
    if (expanded) {
      setExpanded(!expanded);
    }
  });

  const contents = {
    location: {
      styles: {
        left: 0,
        maxWidth: 400,
      },
    },
    checkin: {
      styles: {
        left: 0,
        maxWidth: 780,
      },
    },
    checkout: {
      styles: {
        left: 0,
        maxWidth: 780,
      },
    },
    guests: {
      styles: {
        right: 0,
        maxWidth: 325,
        display: "flex",
        justifyContent: "flex-end",
      },
    },
  };

  return (
    <div className={layout["relative"]}>
      <Bar
        variant={$Bar.SEARCH}
        selected={selected}
        setSelected={setSelected}
        type={type}
        setCategory={setCategory}
        extendsTo={[space["p-h--12"]].join(" ")}
        transparent={transparent}
      />
      {Object.keys(contents).map((content, index) => {
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 60,
              zIndex: 80,
              width: "100%",
              ...contents[content].styles,
            }}
          >
            <div className={[shape["w--full"]].join(" ")} ref={containerRef}>
              <Modal
                variant={content}
                dispatch={`toggle_${content}`}
                extendsTo={[shape["w--full"]].join(" ")}
                criteria={toggleState[content]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
