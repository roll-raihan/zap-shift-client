import React from 'react';
import service from '../../../assets/service.png';

const OurServices = () => {

    const obj = [
        {
            id: 1,
            name: "Express  & Standard Delivery",
            Description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
        },
        {
            id: 2,
            name: "Nationwide Delivery",
            Description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours."
        },
        {
            id: 3,
            name: "Fulfillment Solution",
            Description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
        },
        {
            id: 4,
            name: "Cash on Home Delivery",
            Description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
        },
        {
            id: 5,
            name: "Corporate Service / Contract In Logistics",
            Description: "Customized corporate services which includes warehouse and inventory management support."
        },
        {
            id: 6,
            name: "Parcel Return",
            Description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
        }
    ]

    return (
        <div className='my-5 bg-secondary text-white p-10 rounded-2xl'>
            <h2 className='font-bold text-3xl text-center mb-2'>Our Services</h2>
            <p className='text-center text-wrap mb-2'>
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
            </p>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-3'>
                {
                    obj.map(card =>
                        <div key={card.id} className='bg-white p-5 text-black rounded-2xl flex flex-col justify-center items-center cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                            <img src={service} alt={card.name} />
                            <h3 className='font-bold text-xl mt-2 mb-2 text-center'>
                                {card.name}
                            </h3>
                            <p className='text-center'>
                                {card.Description}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurServices;