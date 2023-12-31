import { Provider } from "react-redux";
import "./App.css";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import { heroapi, popularsales, toprateslaes } from "./data/data";
import Store from "./app/Store";

function App() {
  return (
    <Provider store={Store}>
      <main>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} />
        <Sales endpoint={toprateslaes} />
      </main>
    </Provider>
  );
}

export default App;
