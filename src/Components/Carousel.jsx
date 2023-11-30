import React from 'react';
import Banner from './Banner';
const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <Banner img={'/cover1.jpg'} title={'Prime Location'} des={'Imagine living in the heart of the city, where everything you need is just a short walk or ride away. Our apartment is situated in a vibrant neighborhood, close to top-rated schools, lush green parks, and a variety of restaurants, shops, and entertainment options. With convenient access to public transportation, commuting to work or your studies is a breeze.'}></Banner>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <Banner img={'/cover2.jpg'} title={'Spacious and Modern Living'} des={'Step into a world of comfort and style with our spacious and modern apartment. Our well-maintained unit boasts an abundance of natural light, creating an airy and inviting atmosphere. The thoughtful layout ensures ample space for relaxation, dining, and entertaining guests. Enjoy the modern finishes and amenities that elevate your everyday living.'}></Banner>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <Banner img={'/cover3.jpg'} title={'Secure and Peaceful Environment'} des={'Your safety and peace of mind are our priority. Our apartment complex is equipped with state-of-the-art security measures, including gated entry, security cameras, and controlled access. Enjoy the tranquility of our neighborhood, where residents can relax and unwind in a serene setting. Our community fosters a sense of belonging and neighborliness.'}></Banner>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
    );
};

export default Carousel;