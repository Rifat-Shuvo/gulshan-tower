import React from 'react';
import Header from '../../Components/Header';

const Conatct = () => {
    return (
        <div className='bg-blue-50 p-5'>
            <Header subheading={'Want To Reach Us?'} heading={'Contact'}></Header>
            <div className="flex flex-col lg:flex-row my-16">
                <div className="w-1/3 flex justify-center items-center">
                    <address className='text-2xl'>Address: <br />

                        B/73, Rd:b-3; <br />
                        Gulshan R/A ,Dhaka; <br />
                        Bangladseh.
                    </address>
                </div>
                
                <div className="divider lg:divider-horizontal"></div>
                <div className='w-1/3'>
                <iframe className='w-[380px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.131589942991!2d90.41128994431999!3d23.78067128253854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79ebfc24eab%3A0xea7dab563f12457a!2sGulshan%201%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1700898538879!5m2!1sen!2sbd" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="w-1/3 flex justify-center items-center font-bold text-xl">
                    <div>
                    <p>Call: +88017*****11</p>
                    <p>Mail: email here.</p>
                    <p>Skype: Skype here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conatct;