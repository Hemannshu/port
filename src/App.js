import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import AnimatedBlobs from './components/AnimatedBlobs';
import FloatingMenu from './components/FloatingMenu';

function App() {
  return (
    <div className="App">
      <AnimatedBlobs />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Hackathons />
      <Contact />
      <FloatingMenu />
    </div>
  );
}

export default App;
