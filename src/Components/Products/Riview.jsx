import { Rating } from '@smastrom/react-rating'
import { useState } from 'react';
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import ReviewPage from './ReviewPage';
import toast from 'react-hot-toast';
import Hooks from '../Hook/Hooks';

const Riview = ({title}) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const axiosSecure = UseAxiosSecure()
    const{user} = Hooks()
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const imgUrl = user?.photoURL;
        const reviewTime = new Date().toLocaleString()
        try {
            await axiosSecure.post('/reviews', {
                review,rating,name,imgUrl,title,reviewTime
            });
            setReview('');
            setRating(0);
            toast.success("Review submitted!");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='my-8 grid grid-cols-1 md:grid-cols-3 gap-2'>
            {/* review form */}
            <div className='col-span-1 '>
                <h2 className='reviewText'>Review Here</h2>
                <form onSubmit={handleSubmit} className="review-form ">
                    <input type="text" name='name' id='name' placeholder='Your name' defaultValue={user?.displayName} className='border w-full p-2 mb-2 rounded' />
                    <textarea
                        className='border w-full rounded p-2'
                        placeholder='Your comment here'
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        rows={5}
                        cols={40}
                        required
                    />
                   <div className='flex gap-2 items-center'>
                    <h3>Your Ratings:</h3>
                   <div className="stars" >
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                onClick={() => setRating(i + 1)}
                                
                                style={{
                                    cursor: 'pointer',
                                    color: i < rating ? 'orange' : '#ccc',
                                    fontSize: '24px'
                                }} 
                            >
                                ★
                            </span>
                        ))}
                    </div>
                   </div>
                    <div className='text-center'>
                    <button type="submit" className='px-2 py-1 my-2 rounded bg-[#1a3c3d] text-white'>Submit Review </button>
                    </div>
                </form>
            </div>
            {/* Review preview */}
            <div className='md:col-span-2'>
                <ReviewPage title={title}></ReviewPage>
            </div>

        </div>
    );
};

export default Riview;