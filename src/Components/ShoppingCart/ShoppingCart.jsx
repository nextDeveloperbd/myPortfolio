import React from 'react';
import UseCart from '../Hook/UseCart';
import Hooks from '../Hook/Hooks';
import { Link } from 'react-router-dom';
import {FaTrashAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import { Helmet } from 'react-helmet-async';

const ShoppingCart = () => {
    const [cart, refetch] = UseCart()
    const axiosSecure = UseAxiosSecure()
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

// Delete function
const handleDelete = async(id)=>{
    try {
      const {data} = await axiosSecure.delete(`/shopingCart/${id}`)
      if(data.deletedCount){        
        toast.success(`deleted successfull`)
        // refresh data
       refetch()
      }      
    } catch (error) {
      console.log(error.message);
    }    
  };
  const handleConfirmDelete = (id) =>{
    toast(
      (t) => (
        <div>
          <h3 className='my-2'>Are you sure?</h3>
          <div className='flex gap-2'>
          <button className='px-3 py-1 rounded bg-red-600 text-white' onClick={() => {
          toast.dismiss(t.id)
            handleDelete(id)
          }
          }>Yes</button>
          <button className='px-3 py-1 rounded bg-green-600 text-white' onClick={() => toast.dismiss(t.id)}>Cancel</button>
          </div>
        </div>
      )
    );
  };

    return (
        <div>
            <Helmet>
                <title>Shopping Carts | orbitshiftbd</title>
                <meta name="description" content="This is your page description for SEO." />
        <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
            </Helmet>
            <div className="flex flex-col max-w-4xl  space-y-4 md:p-10 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="md:text-2xl font-semibold bg-[#1a3c3d] p-2 rounded-md text-white">Total {cart?.length > 0 ? 'orders' : 'order'}: {cart.length}</h2>
                <ul className="flex flex-col divide-y">
                    {
                        cart?.length > 0 ? cart?.map(singleCart => <li key={singleCart._id} className="flex flex-col py-3 sm:flex-row sm:justify-between">
                            <div className="flex w-full space-x-2 md:space-x-4">
                                <img className="flex-shrink-0 object-cover w-16 h-16 rounded outline-none " src={singleCart?.photoUrl} alt={singleCart?.title} />
                                <div className="flex flex-col justify-between w-full pb-2">
                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{singleCart?.title}</h3>
                                            {/* <p className="text-sm dark:text-gray-600">Classic</p> */}
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-semibold">${singleCart?.price}</p>
                                            <p className="text-sm line-through dark:text-gray-400"></p>
                                        </div>
                                    </div>
                                    <div className="flex text-sm divide-x">
                                        <button onClick={() => handleConfirmDelete(singleCart?._id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-500">
                                            <FaTrashAlt></FaTrashAlt>
                                            <span>Remove</span>
                                        </button>
                                       {/*  <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                        <FaRegHeart />
                                            <span>Add to favorites</span>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </li>): <div className='text-2xl font-semibold text-red-500'>No Available carts. Please Select Cart</div>
                    }


                </ul>
                <div className="space-y-1 text-right">
                    <p>Total amount:
                        <span className="font-semibold">$ {totalPrice}</span>
                    </p>
                    <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to='/products' type="button" className="px-6 py-2 border rounded-md dark:border-violet-600">Back
                        <span className="sr-only sm:not-sr-only"> to shop</span>
                    </Link>
                    <Link to='/checkOut' type="button" className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600">
                        <span className="sr-only sm:not-sr-only">Continue to</span> Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;