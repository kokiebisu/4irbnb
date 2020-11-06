import React from 'react';
import { createContext, useReducer, useContext } from 'react';

type Dispatch = (action: Action) => void;
type Action = { type: string };

type State = {
  privacy: boolean;
  menu: boolean;
  register: boolean;
};

type ToggleProviderProps = { children: React.ReactNode };

const ToggleStateContext = createContext<State | undefined>(undefined);
const ToggleDispatchContext = createContext<Dispatch | undefined>(undefined);

const toggleReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggle_privacy':
      return { ...state, privacy: !state.privacy };
    case 'toggle_menu':
      return { ...state, menu: !state.menu };
    case 'toggle_register':
      return { ...state, register: !state.register, menu: !state.menu };
    case 'close_register':
      return { ...state, register: !state.register };
    default:
      return state;
  }
};

const ToggleProvider = ({ children }: ToggleProviderProps) => {
  const [state, dispatch] = useReducer(toggleReducer, {
    privacy: true,
    menu: false,
    register: false,
  });

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
    throw new Error('useToggleState must be used within a ToggleProvider');
  }
  return context;
};

const useToggleDispatch = () => {
  const context = useContext(ToggleDispatchContext);
  if (!context) {
    throw new Error('useToggleDispatch must be used within a ToggleProvider');
  }
  return context;
};

export { useToggleDispatch, useToggleState, ToggleProvider };
