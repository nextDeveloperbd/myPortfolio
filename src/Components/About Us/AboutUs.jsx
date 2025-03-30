import React from 'react';
import ProfileAndImage from './ProfileAndImage';
import WhatDoIDo from '../WhatDoIDo/WhatDoIDo';
import Skils from './Skils';
import WorkTogether from './WorkTogether';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import Testimonial from '../Testimonial/Testimonial';
import LatestBlogs from '../Latest Blogs/LatestBlogs';

const AboutUs = () => {
    return (
        <div>
            <ProfileAndImage></ProfileAndImage>
            <hr className='my-8' />
            <WhatDoIDo></WhatDoIDo>
            <Skils></Skils>
            <WorkTogether></WorkTogether>
            <FeaturedProjects></FeaturedProjects>
            <Testimonial></Testimonial>
            <LatestBlogs></LatestBlogs>
           
        </div>
    );
};

export default AboutUs;