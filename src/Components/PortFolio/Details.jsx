import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { _id, img_url, title, category, description, post_date } = useLoaderData();

    return (
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
            <div className=''>
                <img className='w-full rounded' src={img_url} alt="" />
            </div>
            <div className='flex flex-col'>
                <div className='space-y-3 flex-grow'>
                    <h2 className='font-bold text-xl'>{title}</h2>
                    <p>{description}</p>
                    <div>
                        {
                            category?.map((cat, idx) => <span key={idx} className='text-blue-700 '>{cat}</span>)
                        }
                    </div>
                    <h4>{post_date}</h4>
                </div>
                <div className=''>
                    <button className='bg-slate-300 px-2 py-1 rounded '>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;