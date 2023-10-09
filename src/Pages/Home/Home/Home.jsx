import React from 'react';
import Diamonds from '../Diamonds/Diamonds';
import Banner from '../Banner/Banner';
import BestSelling from '../BestSelling/BestSelling';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Diamonds/>

            <BestSelling/>
        </div>
    );
};

export default Home;