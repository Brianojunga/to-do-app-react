import { createContext, useEffect, useState } from "react";

/* eslint-disable-next-line */
export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <AppContext.Provider
      value={{ value, checked, todos, setTodos, setValue, setChecked }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
