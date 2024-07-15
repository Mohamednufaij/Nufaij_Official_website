// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './Compenents/Layout';
import About from './Compenents/Aboutus';
import Header from './Compenents/Header';
import Skills from './Compenents/Skills';
import Projects from './Compenents/Projects';
import Contactme from './Compenents/Contactme';
import Footer from './Compenents/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Layout> */}
        
        <Routes>
          <Route element={<About />} path="/" />
          <Route element={<Skills />} path="/skills" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Contactme />} path="/contact" />
        </Routes>
        
      {/* </Layout> */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
