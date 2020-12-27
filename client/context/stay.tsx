import React, { createContext, useReducer, useContext } from "react";

type Dispatch = (action: Action) => void;
type Action = { type: string; payload: Payload };
type Payload = {
  stay?: string;
  place?: string | undefined;
  guests?: number;
  address?: string;
  property?: string | undefined;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  country?: string;
  street?: string;
  apt?: string;
  city?: string;
  state?: string;
  postal?: string;
  amenities?: string[];
  safeties?: string[];
  spaces?: string[];
  description?: string;
  title?: string;
  phone?: number;
  smoking?: boolean;
  events?: boolean;
  details?: string[];
  notice?: number;
  checkinFrom?: number;
  checkinTo?: number;
  advance?: number | string;
  min?: number;
  max?: number;
  basePrice?: number;
  minPrice?: number;
  maxPrice?: number;
  currency?: string;
  photos?: any[];
};

type State = {
  stay: string;
  place: string;
  guests: number;
  address: string;
  property: string;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  country?: string;
  street?: string;
  apt?: string;
  city?: string;
  state?: string;
  postal?: string;
  amenities?: string[];
  safeties?: string[];
  spaces?: string[];
  description?: string;
  title?: string;
  phone?: number;
  smoking?: boolean;
  events?: boolean;
  details?: string[];
  notice?: number;
  checkinFrom?: number;
  checkinTo?: number;
  advance?: number | string;
  min?: number;
  max?: number;
  basePrice?: number;
  minPrice?: number;
  maxPrice?: number;
  currency?: string;
  photos?: any[];
};

type StayProviderProps = { children: React.ReactNode };

const StayStateContext = createContext<State | undefined>(undefined);
const StayDispatchContext = createContext<Dispatch | undefined>(undefined);

const stayReducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "reset":
      return {
        ...state,
        place: undefined,
        guests: 1,
        address: "",
        property: undefined,
        stay: "Entire place",
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        country: "Canada",
        street: "",
        apt: "",
        city: "",
        state: "",
        postal: "",
        amenities: [],
        safeties: [],
        spaces: [],
        description: "",
        title: "",
        phone: 0,
        smoking: undefined,
        events: undefined,
        details: [],
        notice: 0,
        checkinFrom: 3,
        checkinTo: undefined,
        advance: 0,
        min: 1,
        max: 2,
        basePrice: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        currency: "USD",
        photos: [],
      };
    case "add":
      return { ...state, ...payload };
    default:
      return state;
  }
};

const StayProvider = ({ children }: StayProviderProps) => {
  const [state, dispatch] = useReducer(stayReducer, {
    place: undefined,
    guests: 1,
    address: "",
    property: undefined,
    stay: "Entire place",
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    country: "Canada",
    street: "",
    apt: "",
    city: "",
    state: "",
    postal: "",
    amenities: [],
    safeties: [],
    spaces: [],
    description: "",
    title: "",
    phone: 0,
    smoking: undefined,
    events: undefined,
    details: [],
    notice: 0,
    checkinFrom: 3,
    checkinTo: undefined,
    advance: 0,
    min: 0,
    max: 0,
    photos: [],
  });

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
