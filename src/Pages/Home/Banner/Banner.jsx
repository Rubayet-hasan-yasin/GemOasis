import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-2 container mx-auto items-center'>
            <div>
                <p className='text-2xl'>Hello !</p>
                <h6 className='md:text-7xl text-3xl font-bold my-5 mb-10'>The Ultimate Iced Juwelry</h6>
                <p className='text-gray-500 font-semibold'>Elevate your style with our handcrafted jewelry pieces. Each design is meticulously crafted to perfection, offering you timeless elegance and unmatched beauty. Whether you're looking for a stunning engagement ring or a unique statement necklace, find the perfect piece to enhance your charm and sophistication.</p>
            </div>
            <div className='overflow-hidden'>
                <img src="/src/assets/diamond-diamond-rings-18-karat-yellow-gold.jpg" alt="" className='rotate-[-50deg]' />
            </div>
        </div>
    );
};

export default Banner;