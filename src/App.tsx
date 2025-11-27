import { Header } from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import { HeroSection } from "./Components/HeroSection";

import "animate.css";
import { HeroBar } from "./Components/HeroBar";

function App() {
  return (
    <>
      <main>
        <Header />

        <HeroSection />
        <HeroBar />
      </main>
    </>
  );
}

export default App;
