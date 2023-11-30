import React from 'react';
import { MdOutlineAddHomeWork } from "react-icons/md"
import { Link } from 'react-router-dom';
const Partition = ({heading, description,direction,img}) => {
    return (
        <div className={`flex gap-5 ${direction} p-5 mb-10`}>
            <div className='my-auto md:w-1/2'>
                <h1 className='text-blue-600 text-4xl font-semibold mb-5'>{heading}</h1>
                <p className='font-bold mb-5'>{description}</p>
                <Link to={'/apartment'}><button className="btn btn-outline btn-primary"><span className='text-2xl'><MdOutlineAddHomeWork /></span> Rent Now</button></Link>
                
            </div>
            <div className='md:w-1/2'>
                <img className='rounded-2xl' src={img} alt="" />
            </div>
        </div>
    );
};

export default Partition;