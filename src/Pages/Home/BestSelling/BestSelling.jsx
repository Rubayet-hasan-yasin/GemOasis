
import React from 'react';


// image from assets 
import img1 from '../../../assets/diamond-rings-950-platinum.png'

const BestSelling = () => {

    const jewelryItems = [
        {
            id: 1,
            name: 'Elegant Diamond Ring',
            description: 'A stunning diamond ring with a brilliant-cut diamond set in 18-karat white gold.',
            price: '$2,500',
            imageUrl: img1,
            rating: 3.5,
            reviews: 25,
        },
        {
            id: 2,
            name: 'Sapphire Necklace',
            description: 'A vibrant sapphire necklace with a 14-karat gold chain, perfect for special occasions.',
            price: '$1,800',
            imageUrl: img1,
            rating: 4.0,
            reviews: 18,
        },
        {
            id: 3,
            name: 'Emerald Earrings',
            description: 'Exquisite emerald earrings featuring emerald-cut gemstones in a vintage design.',
            price: '$1,200',
            imageUrl: img1,
            rating: 4.8,
            reviews: 30,
        },
        {
            id: 1,
            name: 'Elegant Diamond Ring',
            description: 'A stunning diamond ring with a brilliant-cut diamond set in 18-karat white gold.',
            price: '$2,500',
            imageUrl: img1,
            rating: 4.5,
            reviews: 25,
        },
        {
            id: 2,
            name: 'Sapphire Necklace',
            description: 'A vibrant sapphire necklace with a 14-karat gold chain, perfect for special occasions.',
            price: '$1,800',
            imageUrl: img1,
            rating: 4.2,
            reviews: 18,
        },
        {
            id: 3,
            name: 'Emerald Earrings',
            description: 'Exquisite emerald earrings featuring emerald-cut gemstones in a vintage design.',
            price: '$1,200',
            imageUrl: img1,
            rating: 4.8,
            reviews: 30,
        },
    ];




    return (
        <div className='container mx-auto my-20'>
            <h3 className='text-4xl text-center font-bold mb-10'>Best Selling</h3>


            <div>
                {/* card div  */}
                <div className="grid grid-cols-1 md:grid-cols-3">

                    {jewelryItems.map((jewelry) => (
                        <div key={jewelry.id} className="bg-white shadow-md overflow-hidden border-b">


                            <figure className='h-52 w-full overflow-hidden'>
                                <img src={jewelry.imageUrl} alt={jewelry.name} className="mx-auto h-full object-cover" />
                            </figure>



                            <div className="p-4">
                                <h3 className="text-2xl font-semibold mb-2">{jewelry.name}</h3>
                                <p className="text-gray-600 mb-2">{jewelry.description}</p>
                                
                                <div className='flex justify-between'>
                                <p className="text-lg font-semibold">{jewelry.price}</p>

                                <button className='bg-blue-600 text-white px-3 rounded'>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BestSelling;