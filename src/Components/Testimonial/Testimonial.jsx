
import CommonTitle from "../Commont Title/CommonTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        axios.get(`https://portfolio-server-psi-six.vercel.app/testimonials`)
            .then(res => {
                setTestimonials(res.data)
            })
    }, []);
    return (
        <div className="border p-2 rounded my-2 md:my-8">
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center mt-2'>
                <div className='col-span-3'>
                    <CommonTitle title={'Testimonials'} description={'See how I have helped our clients succeed. IT’s a highly Customizable,creative, modern, visually stunning and Bootstrap5 HTML5 Template.'}></CommonTitle>
                </div>

            </div>
            {/* Testimonial */}
            <section className="my-4">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-2xl md:text-4xl text-sky-600 font-semibold leading-none text-center">What our customers are saying about us</h1>
                </div>

                <Swiper Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1, // ছোট স্ক্রিনে ১টা
                        },
                        768: {
                            slidesPerView: 2, // 768px বা তার বড় স্ক্রিনে ২টা
                        },
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">
                    {
                        testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
                            <div className=" flex flex-col items-center md:w-10/12 mx-auto cursor-pointer">
                                <div className="relative text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-700 dark:text-gray-300 ">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>
                                    <p className="px-6 py-1 text-lg italic">{testimonial?.description}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700 dark:text-gray-300">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </div>
                                <Rating
                                    style={{ maxWidth: 80 }}
                                    value={testimonial?.rating}
                                    readOnly
                                />
                                <span className="w-12 h-1 my-2 rounded-lg bg-violet-400 dark:bg-violet-600"></span>
                                {/* name and image */}
                                <div className="flex gap-2 items-center flex-1">
                                    <div className="avatar">
                                        <div className="w-12 h-12 rounded-full">
                                            <img src={testimonial?.image} />
                                        </div>
                                    </div>
                                    <p>{testimonial?.userName}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </section>
        </div>
    );
};

export default Testimonial;