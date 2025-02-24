import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe';
import GlobalBackground from './components/GlobalBackground';

function App() {
  return (
    <Router>
      <GlobalBackground />
      <GlobalStyles />
      <Navbar />
      

        <HeroSection />
        <AboutMe />
        <Skills />
        <Experience />
        <Portfolio />
        <ContactMe />

      <Footer />
    </Router>
  );
}

export default App;
