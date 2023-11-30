import React from 'react';
import { GiEntryDoor } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Banner = ({img, title, des}) => {
    return (
        <div className="hero min-h-[70vh]" style={{backgroundImage: `url(${img})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{des}</p>
            <Link to={'/register'}><button className="btn btn-primary">Register Now<span className='text-2xl'><GiEntryDoor/></span></button></Link>
            
          </div>
        </div>
      </div>
    );
};

export default Banner;