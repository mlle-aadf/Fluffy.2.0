import { useEffect } from 'react';
import { LanguageProvider } from '../src/components/LanguageContext';

import Nav from "../src/components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
// Handle scroll restoration
  useEffect(() => {
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="App" id="app">
        <header>
          <Nav/>
        </header>
        <main>
          <section id="section-0" aria-label="Home section" >
            <Home />
          </section>
          <section id="section-1" aria-label="About section">
            <About />
          </section>
          <section id="section-2" aria-label="Contact section">
            <Contact />
          </section>
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
