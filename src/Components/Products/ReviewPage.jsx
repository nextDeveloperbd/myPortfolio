// ReviewPage.js
import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import Hooks from '../Hook/Hooks';
import { FaArrowDown } from 'react-icons/fa';

const ReviewPage = ({title}) => {
    const [reviews, setReviews] = useState([]);
    const axiosSecure = UseAxiosSecure()
    const { user } = Hooks()
    

    useEffect(() => {        
        axiosSecure.get(`/reviews?title=${title}`)
            .then(res => {
                setReviews(res.data) 
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>            
            <div className='flex items-center gap-1'>
            <h2 className='reviewText'>Customer {reviews?.length>0 ? "Reviews": "Review"} <span className='text-[#5271ff]'>({reviews?.length})</span>:</h2>
            <FaArrowDown className='font-bold text-lg'/>
            </div>
            {reviews.length === 0 && <p>No reviews yet.</p>}
            <div className='max-h-60 overflow-y-auto w-full pr-2'>
                {/* reviews */}
                {reviews.map((review, index) => (
                    <div key={index} className="review-card border rounded my-1 flex gap-2 p-2 items-center bg-slate-50">
                        <div className='self-start'>
                            <img src={review?.imgUrl ? review?.imgUrl: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt={review.name || "Reviewer"} className='w-10 h-10 rounded-full'/>
                        </div>
                        <div>
                            <h2 className='text-lg'>{review.name}</h2>
                            <div className='flex gap-2'>
                            <h2 className='font-semibold'>{review.title}</h2>
                            <h2 className='font-semibold'>{review?.reviewTime}</h2>
                            </div>
                        <div style={{ color: 'orange', fontSize: '18px' }}>
                            {'★'.repeat(review.rating)}
                            {'☆'.repeat(5 - review.rating)}
                        </div>
                        <p>{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewPage;
