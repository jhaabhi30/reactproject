import React from "react";
import Card from "./Card";
import img1 from "../images/network.jpg";
import img2 from "../images/laptop.jpg";
import img3 from "../images/CLOUD.jpg";
import img4 from "../images/VIRUS.jpg"




const Icons= ()=>{

                return(
                    <div>
                         <section id="icons" className="py-3 d-flex justify-content-center">
                                <div className="container">
                                  <h5  className="secondheader">WHAT WE OFFER</h5>
                                    <div className="row">
                                        <div className="col-md-6 ty-3">
                                          <Card imgsrc={img1} className="card-img-top" para="Network Support"/>

                                        </div>
                                        <div className=" col-md-6 ty-3">
                                        <Card imgsrc={img2} className="card-img-top" para="Laptop Repair"/>

                                        </div>
                                        <div className=" col-md-6 ty-3">
                                        <Card imgsrc={img3} className="card-img-top" para="CLOUD SERVICE"/>

                                        </div>
                                        <div className=" col-md-6 ty-3">
                                        <Card imgsrc={img4} className="card-img-top" para="CLOUD SERVICE"/>

                                        </div>
                                    </div>
                                </div>
                        </section>
                    </div>
                );
};
export default Icons;