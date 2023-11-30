import React, { useEffect, useState } from 'react';
import Carousel from '../../Components/Carousel';
import Header from '../../Components/Header';
// import { MdHistoryEdu } from "react-icons/md";
import useAll from '../../Hooks/useAll';

import ApartmentCard from '../../Components/ApartmentCard';
const Apartment = () => {
    const [currentPage, setCurrentPage] = useState(1)
    // const [data, setData] = useState([])

    const [all, loading] = useAll()
    const pageSize = 6
    // const totalPages = Math.ceil(data.length / pageSize);
    const totalPages = Math.ceil(all.length / pageSize);
    // useEffect(() => {
    //     fetch('https://my-apartment-server.vercel.app/allapartment')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber); // Update current page state
    }
// console.log(all);
    const renderCurrentPageData = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return all.slice(startIndex, endIndex); // Extract data for current page
    };



    return (
        <div>
           
            <Carousel></Carousel>
            
            <Header subheading={"Our best & Elegant Apartment"} heading={'All Apartment'}></Header>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                {loading ? <>
                    <div className='h-screen p-5'>
                        <h1>PleaseWait ....<progress className="progress w-56"></progress></h1>

                        <div className="skeleton w-full h-full"></div>
                        
                    </div>

                </> :
                    // renderCurrentPageData().map((item, index) =>
                    //     <div key={index} className="flex flex-row gap-7 bg-base-100 shadow-xl p-5 rounded-xl">
                    //         <div className='w-1/2 my-auto'>
                    //             <img src={item.img} alt="Apartment" />
                    //         </div>
                    //         <div className="w-1/2 my-auto">
                    //             <ul className='list-disc text-blue-600 text-lg'>
                    //                 <li>Floor No. {item.floor}</li>
                    //                 <li>Block Name: {item.block}</li>
                    //                 <li>Apartment No. {item.apartment}</li>
                    //                 <li>Rent: ${item.rent}</li>
                    //             </ul>
                    //             <div className="mt-5">
                    //                 <button className="btn btn-primary"><span className='text-2xl'><MdHistoryEdu></MdHistoryEdu></span>Make Agreement</button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // )
                    renderCurrentPageData().map(item => <ApartmentCard
                        key={item._id}
                        item={item}
                    >

                    </ApartmentCard>)
                }
            </div>

            <div className="text-center mt-10">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'btn m-2 btn-secondary' : 'btn m-2 btn-primary'}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Apartment;