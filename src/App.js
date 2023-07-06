import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
