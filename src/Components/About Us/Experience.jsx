import React from 'react';

const Experience = () => {
    return (
        <div>
             {/* Experience */}
             <div className=' flex flex-wrap gap-2 md:gap-6'>
                <div className='flex gap-1 md:gap-3 items-center md:w-48'>
                    <h3 className='text-2xl md:text-5xl font-semibold text-[#5271ff]'>3+ </h3>
                    <div className=''>|</div>
                    <p>Years of Experience</p>
                </div>
                <div className='flex gap-1 md:gap-3 items-center md:w-48'>
                    <h3 className='text-2xl md:text-5xl font-semibold text-[#5271ff]'>110</h3>
                    <div className=''>|</div>
                    <p>Projects Completed</p>
                </div>
                <div className='flex gap-1 md:gap-3 items-center md:w-48'>
                    <h3 className='text-2xl md:text-5xl font-semibold text-[#5271ff]'>2K</h3>
                    <div className=''>|</div>
                    <p>Clients Worldwide</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;