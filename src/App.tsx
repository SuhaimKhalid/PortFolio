import { Header } from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import { HeroSection } from "./Components/HeroSection";

import "animate.css";

import { About } from "./Components/About";
import { Experience } from "./Components/Expresence";
import { Projects } from "./Components/Projects";
import { SKills } from "./Components/Skills";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <main className="page_container">
        <Header />
        <div className="scoll_container">
          <HeroSection />

          <About />
          <Experience />
          <Projects />
          <SKills />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
