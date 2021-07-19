import { createContext, useReducer, useContext } from "react";

type Dispatch = (action: Action) => void;
type Action = { type: string };

type State = {
  template: string;
  display: string;
  title: string;
};

type AuthProviderProps = { children: React.ReactNode };

const AuthStateContext = createContext<State | undefined>(undefined);
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

const authReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "auth_email":
      return {
        ...state,
        template: "auth",
        display: "auth_email",
        title: "Log in or sign up",
      };
    case "auth_phone":
      return {
        ...state,
        template: "auth",
        display: "auth_phone",
        title: "Log in or sign up",
      };
    case "signup":
      return {
        ...state,
        template: "signup",
        display: "signup",
        title: "Finish signing up",
      };
    case "forgot_password":
      return {
        ...state,
        template: "forgot_password",
        display: "forgot_password",
        title: "Forgot password",
      };
    case "exists":
      return {
        ...state,
        template: "exists",
        display: "exists",
        title: "Account exists",
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    display: "auth_phone",
    title: "Log in and sign up",
    template: "auth",
  });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (!context) {
    throw new Error("useAuthState must be used within a ToggleProvider");
  }
  return context;
};

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (!context) {
    throw new Error("useAuthDispatch must be used within a ToggleProvider");
  }
  return context;
};

export { useAuthDispatch, useAuthState, AuthProvider };
