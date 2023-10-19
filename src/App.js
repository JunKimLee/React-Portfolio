import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from './Components/Work'
import Languages from "./Components/Languages";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>

        <Navbar />
        <Home  />
        <About />
        <Languages />
        <Skills />
        <Work  />
        <Contact />
        
    </div>
  );
}

export default App;
