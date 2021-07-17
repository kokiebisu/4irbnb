import { Bar } from "@bar";
import { Modal } from "@modal";
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
  toggleState,
  transparent,
  type,
  handleSelectedChange,
  setExpanded,
  expanded,
  selected,
  contents,
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
        type={type}
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
