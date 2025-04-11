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
import { Toaster } from 'react-hot-toast';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Admin from './Components/Dashboard/Admin.jsx';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.jsx';
import ProductDetails from './Components/Products/ProductDetails.jsx';
import PrivateRoute from './Components/Routes/PrivateRoute.jsx';
import CheckOut from './Components/ShoppingCart/CheckOut.jsx';
import CheckOutList from './Components/Dashboard/CheckOutList.jsx';
import MessageList from './Components/Dashboard/MessageList.jsx';
import Users from './Components/Dashboard/Users.jsx';
import UploadForm from './Components/Dashboard/UploadForm.jsx';
import UseAxiosPublic from './Components/Hook/UseAxiosPublic.jsx';
const axiosPublic = UseAxiosPublic()


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
        loader: async ({ params }) => {
          const response = await axiosPublic.get(`/details/${params.id}`);
          return response.data;
        }
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
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) => {
          const response = await axiosPublic.get(`/productDetails/${params.id}`);
          return response.data;
        }
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails></BlogDetails>,
        loader: async ({ params }) => {
          const response = await axiosPublic.get(`/blogDetails/${params.id}`);
          return response.data;
        }
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
      },
      {
        path:'/shoppingCart',
        element:<PrivateRoute><ShoppingCart></ShoppingCart></PrivateRoute>
      },
      {
        path:'/checkOut',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },
      {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
          {
            path:'/dashboard',
            element:<Admin></Admin>
          },
          {
            path:'users',
            element:<Users></Users>
          },
          {
            path:'checkOutList',
            element:<CheckOutList></CheckOutList>
          },
          {
            path:'messageList',
            element:<MessageList></MessageList>
          },
          {
            path:'upload',
            element:<UploadForm></UploadForm>
          }
        ]
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
          <Toaster />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
