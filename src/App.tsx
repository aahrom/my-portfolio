import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills'

const App: React.FC = () => {
  return (
    <>
      <Header /> 
      <Home />
      <About />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
