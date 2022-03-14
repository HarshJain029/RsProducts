import React from 'react';
import { NavLink } from 'react-router-dom';
import Aboutus from './Aboutus';
import './style.css';

function HomePage() {
    return (
        <>
        
        <div className="headContent">
            <h1>RS PRODUCTS</h1>
            <img src="0001-removebg-preview.png" alt="" />
             <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
             <NavLink to="/aboutus" activeClassName="current"style={{ textDecoration: 'none'}} exact><li>Know More</li></NavLink>
        </div>
        <div className='threeb'><h2>We offer three Bs</h2></div>

        <div className='Images'> 
         <div className='imgs'><img src="quality.jpg" alt="error" />
         <div className='statement'>
         Best Quality
         </div>
         </div>
         <div className='imgs'>
            <img src="best sevice.png" alt="error" />
            
            <div className='statement2'>
         Best service
         </div>
         </div>
         <div className='imgs'>
            <img src="packaging.png" alt="error" />
            
            <div className='statement'>
         Best Packaging
         </div>
         </div>
         </div>
         


        </>
    );
}

export default HomePage;
