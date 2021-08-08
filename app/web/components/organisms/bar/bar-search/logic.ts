import { useState } from "react";
import { useToggleDispatch } from "@context/toggle";

export const useSearchBar = () => {
  const [selected, setSelected] = useState("guests");
  const dispatchToggle = useToggleDispatch();

  const handleGuestsSelected = () => {
    setSelected("guests");
    dispatchToggle({ type: "toggle_guests" });
  };

  const handleCheckInSelected = () => {
    setSelected("checkin");
    dispatchToggle({ type: "toggle_checkin" });
  };

  const handleSearch = () => {
    alert("handle search!");
  };

  return {
    selected,
    dispatchToggle,
    handleGuestsSelected,
    handleCheckInSelected,
    handleSearch,
  };
};
