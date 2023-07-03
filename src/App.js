import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
};

export default App;
