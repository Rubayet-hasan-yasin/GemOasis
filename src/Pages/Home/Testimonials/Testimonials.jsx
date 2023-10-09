import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// image import 
import img1 from '../../../assets/testimonial/client-01.jpg'
import img2 from '../../../assets/testimonial/client-02.jpg'
import img3 from '../../../assets/testimonial/client-03.jpg'
import img4 from '../../../assets/testimonial/client-04.jpg'
import img5 from '../../../assets/testimonial/client-05.jpg'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';




const items = [
    {
        id: 1,
        name: "Veroica",
        location: "Califonia",
        img: img1,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 2,
        name: "Richard",
        location: "Michigan",
        img: img2,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 3,
        name: "Betty Carlson",
        location: "Georiga",
        img: img3,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 4,
        name: "Amanada Warren",
        location: "Florida",
        img: img4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 5,
        name: "John Doe",
        location: "New York",
        img: img5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
];

const Testimonials = () => {
    const swiperRef = useRef();

    const handlenext = () => {
        swiperRef.current.swiper.slideNext();
    }
    const handleprev = () => {
        swiperRef.current.swiper.slidePrev();
    }


    return (
        <div className='bg-[#F2F6F6] bg-[url(/src/assets/doctor-shape-img1.png),_url(/src/assets/doctor-shape-img2.png)] bg-no-repeat bg-[position:left_top,_right_bottom] bg-[length:200px,_200px] mb-20 py-20 my-40'>


            <div className='container mx-auto relative'>

                <div className="flex justify-between absolute top-0 bottom-0 w-full items-center">
                    <LiaAngleLeftSolid onClick={handleprev} className=" bg-white rounded-full shadow-md shadow-gray-300 p-2 text-5xl z-10 hover:bg-blue-500 hover:text-white duration-200" />
                    <LiaAngleRightSolid onClick={handlenext} className="bg-white rounded-full shadow-md shadow-gray-300 p-2 text-5xl z-10 hover:bg-blue-500 hover:text-white duration-200" />
                </div>
                <Swiper
                    ref={swiperRef}
                    rewind={true}
                    className="mySwiper "
                >
                    {
                        items.map((item, index) => (<SwiperSlide key={index}>
                            <div className='flex flex-col md:flex-row items-center justify-center gap-10 px-14 md:px-20 w-full'>

                                <img src={item.img} alt="" className='max-w-[220px] max-h-[220px] rounded-full' />


                                <div>
                                    <p className='text-blue-500 text-xl font-thin'>Testimonials</p>
                                    <p className='md:text-5xl text-3xl my-4 text-gray-900 font-extralight'>What Our Client Says</p>

                                    <p className='text-gray-500 my-3'>{item.review}</p>

                                    <p className='text-gray-800 font-thin'>{item.name} <span className='text-gray-500 text-xs'>{item.location}</span></p>
                                </div>
                            </div>
                        </SwiperSlide>))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;