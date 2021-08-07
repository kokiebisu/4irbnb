import { useToggleDispatch } from "@context/toggle";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { useRef, useState } from "react";

export const useLandingHeaderTemplate = () => {
  const searchbarRef = useRef();
  const toggleDispatch = useToggleDispatch();
  const [expanded, setExpanded] = useState(false);

  useOnClickOutside(searchbarRef, () => {
    toggleDispatch({
      type: "toggle_reset",
    });
    setExpanded(!expanded);
  });

  const handleSearchbarExpand = () => setExpanded(!expanded);

  return { searchbarRef, expanded, handleSearchbarExpand };
};
