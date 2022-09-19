import React from "react";
import Apt1 from "../../assets/img/apt1.jpeg";
import Apt2 from "../../assets/img/apt2.jpeg";
import Apt3 from "../../assets/img/apt3.jpeg";
import "./best.css";

export default function Best() {
  return (
    <div className='best'>
      <h1>Find Best Rated Properties</h1>
      <div>
        <p>
          <span className='bold'>All</span>
        </p>
        <p>Commercial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className='container'>
        <img src={Apt1} alt='' />
        <img src={Apt2} alt='' />
        <img src={Apt3} alt='' />
      </div>
      <button className='btn'>View All</button>
    </div>
  );
}
