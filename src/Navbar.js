import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/logo.png";


 const Navbar = () =>{

    return(

      <>
   
        

             

         <nav className="navbar navbar-expand-lg navbar-light fixed   py-4 ">
             <div className="container">
            <NavLink className="navbar-brand  " to="#">   <img src={web} alt="logo"/>    </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> 
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav  ">
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/">Home </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/service">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                
                </ul>
            </div>
            </div>
            </nav>
            
          
    

      </>
    );
 };
 export default Navbar; 