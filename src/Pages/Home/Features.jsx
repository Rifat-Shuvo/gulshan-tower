import React from 'react';
import Partition from '../../Components/Partition';
// import cover1 from '../../../public/cover1.jpg'
// import cover2 from '../../../public/cover2.jpg'
// import cover3 from '../../../public/cover3.jpg'
// import cover4 from '../../../public/bg.jpg'
const Features = () => {
    return (
        <div className=''>
           <Partition heading={' Spacious and Modern Living'}
           description={'"Step into a world of comfort and style with our spacious and modern apartment. Our well-maintained unit boasts an abundance of natural light, creating an airy and inviting atmosphere. The thoughtful layout ensures ample space for relaxation, dining, and entertaining guests. Enjoy the modern finishes and amenities that elevate your everyday living."'}
           img={'/cover1.jpg'}
           direction={'flex-col md:flex-row'}
           ></Partition> 
           <Partition heading={'Prime & Convenient Location'}
            description={'"Imagine living in the heart of the city, where everything you need is just a short walk or ride away. Our apartment is situated in a vibrant neighborhood, close to top-rated schools, lush green parks, and a variety of restaurants, shops, and entertainment options. With convenient access to public transportation, commuting to work or your studies is a breeze."'}
            img={'/cover2.jpg'}
            direction={'flex-col md:flex-row-reverse'}
           ></Partition>
           <Partition heading={'Serene and Peaceful Retreat'}
           description={'" Leave the hustle and bustle behind and step into your tranquil oasis of tranquility. This apartment offers a serene and peaceful retreat, perfect for unwinding after a long day or simply enjoying moments of quiet relaxation."'}
           img={'/cover3.jpg'}
           direction={'flex-col md:flex-row'}
           ></Partition>
           <Partition heading={'Fully Equipped for Comfort and Convenience'}
           description={'"This apartment comes fully equipped with everything you need for a comfortable and convenient living experience. Enjoy modern appliances, ample storage space, and thoughtful amenities that make every day a breeze."'}
           img={'/bg.jpg'}
           direction={'flex-col md:flex-row-reverse'}
           ></Partition>
        </div>
    );
};

export default Features;