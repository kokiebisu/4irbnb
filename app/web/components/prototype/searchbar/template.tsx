import { Bar } from "@bar";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { useRef } from "react";

export type SearchbarPrototypeTemplateProps = {
  containerRef?: any;
  toggleState?: any;
  transparent?: any;
  type?: any;
  handleSelectedChange?: any;
  setExpanded?: any;
  selected?: any;
  contents?: any;
  setCategory?: any;
  expanded?: boolean;
};

export const SearchbarPrototypeTemplate = ({
  transparent,
  handleSelectedChange,
  setExpanded,
  expanded,
  selected,
}: SearchbarPrototypeTemplateProps): JSX.Element => {
  const containerRef = useRef();

  useOnClickOutside(containerRef, () => {
    if (selected) {
      handleSelectedChange(!selected);
    }
    if (expanded) {
      setExpanded(!expanded);
    }
  });
  return (
    <div className="relative">
      <Bar
        variant="search"
        selected={selected}
        handleSelectedChange={handleSelectedChange}
        type={"stay"}
        transparent={transparent}
        handleGuestsSelected={() => alert("yo")}
        handleCheckInSelected={() => alert("yo")}
        handleSearch={() => alert("search")}
      />
      {/* {Object.keys(contents).map((content, index) => {
        return (
          <div
            key={index}
            className="absolute z-50 w-full"
            style={{
              top: 70,
              ...contents[content].styles,
            }}
          >
            <div className="w-full" ref={containerRef}>
              <Modal
                variant={content}
                dispatch={`toggle_${content}`}
                criteria={toggleState[content]}
              />
            </div>
          </div>
        );
      })} */}
    </div>
  );
};
