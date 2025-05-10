import { createContext, useState } from "react";

/* eslint-disable-next-line */
export const MainContext = createContext();

function MainContextProvider({ children }) {
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  return (
    <MainContext.Provider
      value={{ active, setActive, completed, setCompleted }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextProvider;
