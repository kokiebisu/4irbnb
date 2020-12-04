import React from "react";
import { createContext, useReducer, useContext } from "react";

type Dispatch = (action: Action) => void;
type Action = { type: string; payload: Payload };
type Payload = {
  stay?: string;
  place?: string;
  guests?: number;
  address?: string;
  property?: string;
  bedrooms?: number;
  beds?: number;
};

type State = {
  stay: string;
  place: string;
  guests: number;
  address: string;
  property: string;
  bedrooms?: number;
  beds?: number;
};

type StayProviderProps = { children: React.ReactNode };

const StayStateContext = createContext<State | undefined>(undefined);
const StayDispatchContext = createContext<Dispatch | undefined>(undefined);

const stayReducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "reset":
      return { ...state, stay: "Entire place", guests: 0, address: "" };
    case "add":
      return { ...state, ...payload };
    default:
      return state;
  }
};

const StayProvider = ({ children }: StayProviderProps) => {
  const [state, dispatch] = useReducer(stayReducer, {
    place: "",
    guests: 0,
    address: "",
    property: "",
    stay: "Entire place",
    bedrooms: 0,
    beds: 0,
  });

  console.log("stay provider", state);

  return (
    <StayStateContext.Provider value={state}>
      <StayDispatchContext.Provider value={dispatch}>
        {children}
      </StayDispatchContext.Provider>
    </StayStateContext.Provider>
  );
};

const useStayState = () => {
  const context = useContext(StayStateContext);
  if (!context) {
    throw new Error("useStayState must be used within a StayProvider");
  }
  return context;
};

const useStayDispatch = () => {
  const context = useContext(StayDispatchContext);
  if (!context) {
    throw new Error("useStayDispatch must be used within a StayProvider");
  }
  return context;
};

export { useStayState, useStayDispatch, StayProvider };
