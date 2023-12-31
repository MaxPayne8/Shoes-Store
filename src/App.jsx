import { Provider } from "react-redux";
import "./App.css";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import {
  footerAPI,
  heroapi,
  highlight,
  popularsales,
  sneaker,
  story,
  toprateslaes,
} from "./data/data";
import Store from "./app/Store";
import FlexContent from "./components/FlexContent";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Navbar />
        <Cart />
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App;
