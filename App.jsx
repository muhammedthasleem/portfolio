import React from "react";
import "./global.css";
import Nav from "./components/ Nav";
import FirstPage from "./components/FirstPage";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";

import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      {/* <Router> */}
        <Nav />
        <FirstPage id='firstPage' />
        <About id='about'/>
        <Skills id='skills'/>
        <Services id='services'/>
        <Contact id='contact'/>
        {/* <Routes>
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

        <Footer />
      {/* </Router> */}
    </div>
  );
};

export default App;
