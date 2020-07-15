import React from "react";
import { NavLink } from "react-router-dom";

const Banner= ()=>{

                return(
                    <div>
                         <section id="header" className="">
                                <div className="banner">
                                    <div className="header_text container ">
                                        <h1 className="mx-auto">Special Discount</h1>
                                        <h2>New Macbook Pro</h2>
                                        <strong> <h3>Best Laptop</h3></strong>
                                            <NavLink to="" className="btn"> Shop Now </NavLink>
                                    </div>
                                </div>
                        </section>
                    </div>
                );
};
export default Banner;