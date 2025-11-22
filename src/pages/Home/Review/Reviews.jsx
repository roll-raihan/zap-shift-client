import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import customerTop from '../../../assets/customer-top.png';


const Reviews = ({ reviewPromise }) => {

    const reviews = use(reviewPromise);
    // console.log(reviews) 

    return (
        <div className='my-24'>
            <div className='items-center justify-center flex flex-col'>
                <img className='my-2' src={customerTop} alt="Customer-top image" />
                <h2 className='font-bold text-3xl text-center my-2'>What our customers are sayings</h2>
                <p className='text-center text-wrap my-2'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },   // mobile
                        768: { slidesPerView: 2 },   // tablet
                        1024: { slidesPerView: 3 },  // small laptop
                        1280: { slidesPerView: 4 },  // large desktop
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper my-5"
                >
                    {
                        reviews.map((review) => <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;