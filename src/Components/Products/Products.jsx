import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaLocationArrow } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Hooks from '../Hook/Hooks';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import toast from 'react-hot-toast';
import UseCart from '../Hook/UseCart';
import Loader from '../Loader/Loader';


const Products = () => {
    const { user, loading } = Hooks();
    const navigate = useNavigate()
    const location = useLocation()
    // const from = location.state?.from?.pathname || '/'
    const [products, setProducts] = useState([])
    const axiosSecure = UseAxiosSecure()
    const [, refetch] = UseCart()

    useEffect(() => {
        if(!loading){
            axiosSecure.get(`/products`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(error => {
                console.log(error.message);

            })
        }else{
            return <Loader></Loader>
        }
        
    }, []);
    //    add to cart
    const handleAddToCart = (item) => {
        if (user && user?.email) {
            //TODO: send card item to the database
            const cartProduct = {
                productId: item?._id,
                email: user?.email,
                title: item?.title,
                price: parseInt(item?.price),
                photoUrl: item?.img_url
            }
            axiosSecure.post('/carts', cartProduct)
                .then(res => {
                    const cartItem = res.data;
                    if (cartItem.insertedId) {
                        toast.success(`${item?.title} added successfully`)
                    }
                    // refetch
                    refetch()
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Log in to add the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <Helmet>
                <title>Products | My Portfolio website</title>
                <meta name="description" content="This is your page description for SEO." />
                <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
            </Helmet>
            <div className="flex flex-col items-center md:py-8 py-2 md:w-3/4 text-justify mx-auto md:text-center space-y-4">
                <h1 className="text-2xl font-semibold">Check Out What We've Created for You</h1>
                <p className="">Explore a collection of projects where creativity meets code. From sleek, responsive designs to intuitive user experiences, each project represents a unique solution tailored to meet client needs. Dive in to see how ideas transform into digital realities.</p>
                <div className="">
                    <Link to="/contact" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium contactBtn text-white inline-block ">
                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Contact Us</span>
                    </Link>
                </div>
            </div>
            <hr />

            {/* Products menu starts */}
            <div className='my-8'>
                {/*  <nav className='flex gap-2 justify-center my-4 text-xl '>
                    <Link className='border-b-2 border-blue-600'>All</Link>
                    <Link className='border-b-2 border-blue-600'>Ebooks</Link>
                    <Link className='border-b-2 border-blue-600'>Courses</Link>
                    <Link className='border-b-2 border-blue-600'>Assests</Link>
                </nav> */}
                {/* Products card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-4 md:py-8">
                    {
                        products?.map(product => <div key={product._id}>
                            <img className="border border-gray-400  hover:border hover:border-white md:h-72 w-full " src={product.img_url} alt={product?.title} />
                            <div className=" my-4 px-3">
                                <h2 className="text-2xl font-semibold hover:text-[#5271ff] duration-300 mb-2">{product?.title}</h2>
                                <p>{product?.description}</p>
                                <p className='text-xl font-semibold'>Price: $<span>{product?.price}</span> USd</p>
                            </div>
                            {/*  Products card end  */}
                            <div className="flex items-center gap-4 px-3 mt-2">
                                <div className="">
                                    <Link to={`/productDetails/${product?._id}`} className="px-5 py-2 rounded relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                                        <span className="relative group-hover:text-white flex items-center gap-2">Details</span>
                                    </Link>
                                </div>
                                <div className="">
                                    <button onClick={() => handleAddToCart(product)} className="px-5 py-2 rounded relative group overflow-hidden font-medium bg-[#1a3c3d]  text-white inline-block ">
                                        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                                        <span className="relative group-hover:text-white flex items-center gap-2">{product?.addToCart}</span>
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;