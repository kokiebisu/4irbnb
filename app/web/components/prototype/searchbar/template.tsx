import { Bar } from '@bar';
import { Modal } from '@modal';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { useRef } from 'react';

export interface SearchbarPrototypeTemplateProps {
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
}

export const SearchbarPrototypeTemplate: React.FC<SearchbarPrototypeTemplateProps> = ({
  toggleState,
  transparent,
  type,
  handleSelectedChange,
  setExpanded,
  expanded,
  selected,
  contents,
  setCategory,
}) => {
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
        setSelected={handleSelectedChange}
        type={type}
        setCategory={setCategory}
        transparent={transparent}
      />
      {Object.keys(contents).map((content, index) => {
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
      })}
    </div>
  );
};
