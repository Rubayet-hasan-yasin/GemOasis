import React from 'react';
import Diamonds from '../Diamonds/Diamonds';
import Banner from '../Banner/Banner';
import BestSelling from '../BestSelling/BestSelling';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Diamonds/>

            <BestSelling/>

            <Testimonials/>
        </div>
    );
};

export default Home;