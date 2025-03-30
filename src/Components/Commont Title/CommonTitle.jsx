import React from 'react';

const CommonTitle = ({title, description}) => {
    return (
       <div className=''>
         <div className='flex  gap-2'>
            <div className='border-l-4 border-[#5271ff]'></div>
            <h3 className='text-3xl md:text-5xl font-bold' >{title}</h3>
        </div>
        <p className='mt-4'>{description}</p>
       </div>
    );
};

export default CommonTitle;