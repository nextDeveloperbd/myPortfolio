import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import Portfolio from './Components/MyPortFolio/Portfolio.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Services from './Components/Services/Services.jsx';
import Register from './Components/UserLog/Register.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import SignIn from './Components/UserLog/SignIn.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/portfolio',
        element:<Portfolio></Portfolio>
      },
      {
        path:'/pricing',
        element:<Pricing></Pricing>
      },
      {
        path:'/contact',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/services',
        element:<Services></Services>
      },
      {
        path:'/register',
        element:<Register></Register>
      },{
        path:'/signIn',
        element:<SignIn></SignIn>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
