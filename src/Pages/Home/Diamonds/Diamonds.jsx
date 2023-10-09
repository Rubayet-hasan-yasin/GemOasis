import React from 'react';
// swiper

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


// image from assets 
import img1 from '../../../assets/Diamonds/Asscher.svg'
import img2 from '../../../assets/Diamonds/Cushion.svg'
import img3 from '../../../assets/Diamonds/Emerald.svg'
import img4 from '../../../assets/Diamonds/Heart.svg'
import img5 from '../../../assets/Diamonds/Marquise.svg'
import img6 from '../../../assets/Diamonds/Oval.svg'
import img7 from '../../../assets/Diamonds/Pear.svg'
import img8 from '../../../assets/Diamonds/Princess.svg'
import img9 from '../../../assets/Diamonds/Radiant.svg'
import img10 from '../../../assets/Diamonds/Round.svg'
import img11 from '../../../assets/Diamonds/Special.svg'


const items = [
    {
        img: img1,
        text : 'Asscher'
    },
    {
        img: img2,
        text : 'Cushion'
    },
    {
        img: img3,
        text : 'Emerald'
    },
    {
        img: img4,
        text : 'Heart'
    },
    {
        img: img5,
        text : 'Marquise'
    },
    {
        img: img6,
        text : 'Oval'
    },
    {
        img: img7,
        text : 'Pear'
    },
    {
        img: img8,
        text : 'Princess'
    },
    {
        img: img9,
        text : 'Radiant'
    },
    {
        img: img10,
        text : 'Round'
    },
    {
        img: img11,
        text : 'Special'
    },
    
];



const Diamonds = () => {
    return (
        <section className="container mx-auto select-none my-20">
            {/* title  */}
            <h4 className='text-4xl text-center mb-10 font-bold'>Certified Diamonds</h4>


            
            <Swiper
                rewind={true}
                slidesPerView={1}
                spaceBetween={3}
                speed={2500}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 5,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    items.map((item, index) =>
                    (<SwiperSlide key={index}>
                        < div className="rounded-lg w-40 border mx-auto" >
                            <div className="my-12">
                                <figure className="bg-[#F2F6F6] p-4 rounded-full mx-auto w-[90px] h-[90px] grid justify-center items-center">
                                    <img src={item.img} alt="" />
                                </figure>
                                <p className="text-center text-lg font-semibold">{item.text}</p>
                            </div>
                        </div >
                    </SwiperSlide>))
                }
            </Swiper>


        </section>
    );
};

export default Diamonds;