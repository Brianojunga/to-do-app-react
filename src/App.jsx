import Header from "./main/Header";
import AppContextProvider from "./Context/AppContext";
import Todos from "./main/todos";
import MainContextProvider from "./Context/mainContext";
import Footer from "./main/Footer";

function App() {
  return (
    <>
      <AppContextProvider>
        <Header />
        <MainContextProvider>
          <Todos />
        </MainContextProvider>
      </AppContextProvider>
      <Footer />
    </>
  );
}

export default App;
