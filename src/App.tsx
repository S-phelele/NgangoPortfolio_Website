import React, { useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Certificate,
  Resume,
  About,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="main-container">
      <Navigation />
      <FadeIn transitionDuration={700}>
        <Main />
        <About />
        <Expertise />
        <Timeline />
        <Project />
        <Certificate />
        <Resume />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
