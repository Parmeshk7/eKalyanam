import { createContext, useContext } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ myName: "e- kalyanamAbc" }}>
      {children}
    </StoreContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, StoreContext, useProductContext };