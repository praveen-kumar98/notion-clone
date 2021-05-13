import { createContext, useReducer } from "react";
import reducers from "./Reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const intialState = { pages: [], notify: {} };
  const [state, dispatch] = useReducer(reducers, intialState);
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
