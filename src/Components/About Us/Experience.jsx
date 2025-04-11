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
        <div className="mt-4 md:mt-0">
             {/* Experience */}
             <div className=' flex flex-wrap gap-2 md:gap-6'>
                <div className='flex gap-1 md:gap-3 items-center md:w-48 w-[30%]'>
                    <h3 className='text-xl  font-semibold text-[#5271ff] border-r-2 border-gray-500 pr-1'><span className="text-2xl md:text-5xl">3+ </span></h3>
                    <p className="text-xs md:text-base">Years of Experience</p>
                </div>
                <div className='flex gap-1 md:gap-3 items-center md:w-48 w-[30%]'>
                    <motion.h3  className='text-2xl md:text-5xl font-semibold text-[#5271ff] md:w-28 border-r-2 border-gray-500 pr-1'>{rounded}</motion.h3>
                 
                    <p className="text-xs md:text-base">Projects Completed</p>
                </div>
                <div className='flex gap-1 md:gap-3 items-center md:w-48 w-[30%]'>
                    <h3 className='text-2xl md:text-5xl font-semibold text-[#5271ff] border-r-2 border-gray-500 pr-1'>2K</h3>
                    <p className="text-xs md:text-base">Clients Worldwide</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;