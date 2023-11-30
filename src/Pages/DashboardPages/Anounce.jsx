import React from 'react';
import useAnounce from '../../Hooks/useAnounce';

const Anounce = () => {
    const [anunce] = useAnounce()
    return (
        <div>
            <h1 className='text-2xl text-center p-5 text-blue-600'>Hello from Anouncement</h1>
            <div className='flex px-5 gap-7 flex-col lg:flex-row'>
                {
                    anunce.map(item=><div key={item._id} className="card bg-base-100 text-base-content shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>)
                }

            </div>
        </div>
    );
};

export default Anounce;