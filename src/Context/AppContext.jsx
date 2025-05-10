import { createContext, useState } from "react";

/* eslint-disable-next-line */
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  return (
    <AppContext.Provider
      value={{ value, checked, todos, setTodos, setValue, setChecked }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
