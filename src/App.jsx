import NavBar from './components/NavBar';
import Hero from './components/Hero';
import StarField from './components/StarField';
import MeteorShower from './components/MeteorShower';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';



export default function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <StarField />
      <MeteorShower />
      
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <About />


        <Skills />
        <Contact />
    
        <Footer />
      </div>
    </div>
  );
}