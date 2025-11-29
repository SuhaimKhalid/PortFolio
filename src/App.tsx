import { Header } from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import { HeroSection } from "./Components/HeroSection";

import "animate.css";

import { About } from "./Components/About";

function App() {
  return (
    <>
      <main className="page_container">
        <Header />
        <div className="scoll_container">
          <HeroSection />

          <About />
        </div>
      </main>
    </>
  );
}

export default App;
