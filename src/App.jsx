import Header from "./Header";
import AppContextProvider from "./Context/context";

function App() {
  return (
    <AppContextProvider>
      <Header />
    </AppContextProvider>
  );
}

export default App;
