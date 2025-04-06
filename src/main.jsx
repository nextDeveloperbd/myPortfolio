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
import Products from './Components/Products/Products.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Contact from './Components/Contact/Contact.jsx';
import TeamMembers from './Components/TeamMember/TeamMembers.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Details from './Components/PortFolio/Details.jsx';
import BlogDetails from './Components/Blogs/BlogDetails.jsx';
import Register from './Components/Register/Register.jsx';
import LogIn from './Components/Login/LogIn.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';

// Create a client
const queryClient = new QueryClient()

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
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://portfolio-server-psi-six.vercel.app/details/${params.id}`)
      },
      {
        path: '/services',
        element: <ServicesAndPricing></ServicesAndPricing>
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
        path: '/blogDetails/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`https://portfolio-server-psi-six.vercel.app/blogDetails/${params.id}`)
      },
      {
        path: '/teamMembers',
        element: <TeamMembers></TeamMembers>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
          {/* <Toaster /> */}
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
