import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react";


const Experience = () => {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))
    useEffect(() => {
        const controls = animate(count, 110, { duration: 5 })
        return () => controls.stop()
    }, [])
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
                    <motion.h3  className='text-2xl md:text-5xl font-semibold text-[#5271ff] md:w-28'>{rounded}</motion.h3>
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