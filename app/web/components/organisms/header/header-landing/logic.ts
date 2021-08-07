import { useToggleDispatch, useToggleState } from "@context/toggle";
import Router from "next/router";
import { useState } from "react";

export const useLandingHeader = () => {
  const toggleState = useToggleState();
  const [_, setCategory] = useState("stay");
  const toggleDispatch = useToggleDispatch();
  const types: { [type: string]: { title: string; onClick: any } } = {
    stay: {
      title: "Places to stay",
      onClick: () => setCategory("stay"),
    },
    experiences: {
      title: "Experiences",
      onClick: () => setCategory("experiences"),
    },
    online: {
      title: "Online Experiences",
      onClick: () => Router.push("/s/experiences/online"),
    },
  };

  const menuCriteria = toggleState.menu;

  const handleGlobeToggle = () => toggleDispatch({ type: "toggle_globe" });

  const handleMenuToggle = () => toggleDispatch({ type: "toggle_menu" });

  const handleSignUpModalToggle = () => toggleDispatch({ type: "toggle_auth" });

  return {
    types,
    menuCriteria,
    handleGlobeToggle,
    handleMenuToggle,
    handleSignUpModalToggle,
  };
};
