import React, { createContext, useReducer, useContext } from "react";

type Dispatch = (action: Action) => void;
type Action = { type: string };

type State = {
  privacy: boolean;
  menu: boolean;
  auth: boolean;
  globe: boolean;
  location: boolean;
  guests: boolean;
  check: boolean;
};

type ToggleProviderProps = { children: React.ReactNode };

const ToggleStateContext = createContext<State | undefined>(undefined);
const ToggleDispatchContext = createContext<Dispatch | undefined>(undefined);

const toggleReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "toggle_privacy":
      console.log("entered privacy");
      return { ...state, privacy: !state.privacy };
    case "toggle_menu":
      return { ...state, menu: !state.menu };
    case "toggle_auth":
      return { ...state, auth: !state.auth, menu: !state.menu };
    case "toggle_globe":
      return { ...state, globe: !state.globe };
    case "toggle_location":
      return { ...state, location: !state.location };
    case "toggle_guests":
      return { ...state, guests: !state.guests };
    case "toggle_check":
      return { ...state, check: !state.check };
    case "close_register":
      return { ...state, auth: !state.auth };
    default:
      return state;
  }
};

const ToggleProvider = ({ children }: ToggleProviderProps) => {
  const [state, dispatch] = useReducer(toggleReducer, {
    privacy: true,
    menu: false,
    auth: false,
    globe: false,
    location: false,
    guests: false,
    check: false,
  });

  console.log("state", state);

  return (
    <ToggleStateContext.Provider value={state}>
      <ToggleDispatchContext.Provider value={dispatch}>
        {children}
      </ToggleDispatchContext.Provider>
    </ToggleStateContext.Provider>
  );
};

const useToggleState = () => {
  const context = useContext(ToggleStateContext);
  if (!context) {
    throw new Error("useToggleState must be used within a ToggleProvider");
  }
  return context;
};

const useToggleDispatch = () => {
  const context = useContext(ToggleDispatchContext);
  if (!context) {
    throw new Error("useToggleDispatch must be used within a ToggleProvider");
  }
  return context;
};

export { useToggleDispatch, useToggleState, ToggleProvider };
