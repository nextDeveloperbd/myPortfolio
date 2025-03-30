import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import Home from './Components/Home/Home.jsx';
import Portfolio from './Components/PortFolio/Portfolio.jsx';
import ServicesAndPricing from './Components/ServicesAndPricing/ServicesAndPricing.jsx';
import Resume from './Components/Resume/Resume.jsx';
import Products from './Components/Products/Products.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Contact from './Components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: '/services',
        element: <ServicesAndPricing></ServicesAndPricing>
      },
      {
        path: '/resume',
        element: <Resume></Resume>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

      <RouterProvider router={router}></RouterProvider>
      {/* <Toaster /> */}
    </HelmetProvider>

  </React.StrictMode>,
)
