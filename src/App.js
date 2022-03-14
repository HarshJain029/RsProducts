import React from 'react';
import Products from './components/productsApp';
import Navigation from './components/navigation';
import HomePage from './components/HomePage';
import ContactUs from './components/Contactus';
// import SingleProduct from './components/singleProduct';
import Aboutus from './components/Aboutus';
import { Route } from 'react-router-dom';
import {Routes} from "react-router-dom";
import UnderConstruction from './components/underConstruction';
const App = () => {
  return (
    <div>
      <Navigation/>
      
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route  path='/contactus' element={<ContactUs/>}> </Route>
        <Route  path='/aboutus' element={<Aboutus/>}> </Route>
        <Route  path='/products' element={<Products/>}> </Route>
        <Route  path='/oops' element={<UnderConstruction/>}> </Route>
      </Routes>


    </div>
  );
};

export default App;

