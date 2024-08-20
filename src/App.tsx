import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills'
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact/> 
    </>
  );
}

export default App;
