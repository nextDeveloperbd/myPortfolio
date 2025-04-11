import React from 'react';
import { Helmet } from 'react-helmet-async';

const Admin = () => {
    return (
        <div>
            <Helmet>
                                        <title>Admin | orbitshiftbd</title>
                                        <meta name="description" content="This is your page description for SEO." />
                                        <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
                                    </Helmet>
            <h1>Admin</h1>
        </div>
    );
};

export default Admin;