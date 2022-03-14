import React from 'react';
import { NavLink } from 'react-router-dom';
import UnderConstruction from './underConstruction';


export default function SingleProduct(Props) {
    return (
         <> 
        <div className='productarea'>
            
            
                <div className='singleproduct'>
                {/* <span className='sno'>{Props.id}</span> */}
                
                <div className='productimg'>
                    <img src={Props.image} alt="error" />
                </div>
                <h2>{Props.name}</h2>
                <div className='productdescription'>
                   {Props.description}
                </div>
               
                <NavLink to="/contactus" style={{ textDecoration: 'none'}} exact><li>Order Now</li></NavLink>
                <NavLink to="/oops" style={{ textDecoration: 'none'}} exact><li>Read More</li></NavLink>
                
            </div>
            


            
        </div>

        </>
    );
}


