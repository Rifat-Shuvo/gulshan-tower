import React from 'react';

const Header = ({subheading, heading}) => {
    return (
        <div className='mx-auto my-8 text-center md:w-3/12 '>
            <p className='text-blue-600 font-semibold mb-2'>--- {subheading} ---</p>
            <h3 className='text-3xl font-bold uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default Header;