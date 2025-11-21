import bookingIcon from '../../../assets/bookingIcon.png';

const HowItWorks = () => {

    const objs = [
        {
            id: 1,
            name: "Booking Pick & Drop",
        },
        {
            id: 2,
            name: "Cash On Delivery"
        },
        {
            id: 3,
            name: "Delivery Hub"
        },
        {
            id: 4,
            name: "Booking SME & Corporate"
        }
    ]

    return (
        <div className='m-10'>
            <h2 className='text-2xl font-bold my-3'>How It Works</h2>
            <div className='grid justify-center items-center gap-6 md:grid-cols-2 lg:grid-cols-4'>
                {
                    objs.map((obj) =>
                        <div key={obj.id} className='bg-[#FFFFFF]
                            rounded-2xl p-8 shadow-md overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
                            <img src={bookingIcon} alt="" />
                            <h3 className='font-bold mb-2'>{obj.name}</h3>
                            <p className=''>From personal packages to business shipments — we deliver on time, every time.</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HowItWorks;