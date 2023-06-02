import { createContext, useContext, useReducer } from "react";

interface propTypes {
  children: React.ReactNode;
}
interface InitialState {
  loading: boolean;
  error: boolean;
  upLoadImg?: boolean;
}
interface MyAction {
  type:
    | "START_REQUEST"
    | "REQUEST_SUCCESS"
    | "REQUEST_ERROR"
    | "UPLOAD_SUCCESS"
    | "CLOSE_MODAL";
  payload?: unknown;
}
const InitalContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<MyAction>;
} | null>(null);

const initialState: InitialState = {
  loading: false,
  upLoadImg: false,
  error: false,
};

const reducer = (state: InitialState, action: MyAction) => {
  switch (action.type) {
    case "START_REQUEST":
      return {
        ...state,
        loading: true,
        upLoadImg: false,
        error: false,
      };
    case "REQUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
      };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        loading: false,
        upLoadImg: true,
        error: false,
      };
    case "REQUEST_ERROR":
      return {
        ...state,
        loading: false,
        upLoadImg: false,
        error: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        loading: false,
        upLoadImg: false,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export const InitialContextProvider = ({ children }: propTypes) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const controlState = { state, dispatch };
  return (
    <InitalContext.Provider value={controlState}>
      {children}
    </InitalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useInitialContext = () => {
  const data = useContext(InitalContext);
  return data;
};
