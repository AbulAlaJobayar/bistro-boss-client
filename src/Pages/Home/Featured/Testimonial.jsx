import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import {FaQuoteLeft} from "react-icons/fa";


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <>
            <section className='my-20'>
                <SectionTitle
                    subHeading={'What Our Clients Say'}
                    heading={'TESTIMONIALS'}
                ></SectionTitle>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='mx-24 my-16 flex flex-col items-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className='w-20 h-20 mt-12'></FaQuoteLeft>
                                <p className='py-8'>{review.details}</p>
                                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>

            </section>

        </>




    );
};

export default Testimonial;