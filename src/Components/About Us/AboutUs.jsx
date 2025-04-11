import React from 'react';
import ProfileAndImage from './ProfileAndImage';
import WhatDoIDo from '../WhatDoIDo/WhatDoIDo';
import Skils from './Skils';
import WorkTogether from './WorkTogether';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';
import Testimonial from '../Testimonial/Testimonial';
import LatestBlogs from '../Latest Blogs/LatestBlogs';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Home | orbitshiftbd</title>
                <meta name="description" content="This is your page description for SEO." />
                <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
            </Helmet>
            <ProfileAndImage></ProfileAndImage>
            <hr className='md:my-8 my-2' />
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