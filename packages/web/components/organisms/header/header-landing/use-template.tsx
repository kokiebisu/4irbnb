import { useToggleDispatch } from "@context/toggle";
import { useHandleScroll } from "@hooks/useHandleScroll";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { useRef, useState } from "react";

export const useLandingHeaderTemplate = () => {
  const searchbarRef = useRef();
  const toggleDispatch = useToggleDispatch();
  const [expanded, setExpanded] = useState(false);
  const scrollPosition = useHandleScroll();

  useOnClickOutside(searchbarRef, () => {
    toggleDispatch({
      type: "toggle_reset",
    });
    setExpanded(!expanded);
  });

  const positionAtPageTop = scrollPosition <= 0;

  const handleSearchbarExpand = () => setExpanded(!expanded);

  return { searchbarRef, expanded, handleSearchbarExpand, positionAtPageTop };
};
