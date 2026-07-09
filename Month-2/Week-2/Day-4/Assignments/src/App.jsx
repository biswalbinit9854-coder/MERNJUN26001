import React from 'react';
import Home from './Home';
import Service from './Service'
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router';


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path='/home' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/service' element={<Service/>}/>
   <Route path='/contact' element={<Contact/>}/>

   </Routes>
   </>
  );
}

export default App;
