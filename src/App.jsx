import React from 'react';
import './App.css';
import Landing from './Segments/Landing';
import Promo from './Segments/Promo';
import About from './Segments/About';
import Postcard from './Segments/Postcard';
import Services from './Segments/Services';
import Postcard2 from './Segments/Postcard2';
import Sectors from './Segments/Sectors';
import Contact from './Segments/Contact';
import Footer from './Components/Footer';


function App() {
 

  return (
    
    <>
   <Landing/>
    <Promo/>
    <About/>
    <Postcard/>
    <Services/>
    <Postcard2/>
    <Sectors/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default App
