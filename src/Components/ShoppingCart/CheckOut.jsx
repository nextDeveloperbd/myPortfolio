import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import toast from 'react-hot-toast';

const CheckOut = () => {
    const axiosSecure = UseAxiosSecure();
    const handleSendMessage = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const location = e.target.location.value;
        const message = e.target.message.value;
        const serviceName = e.target.serviceName.value;
        const method = e.target.method.value;
        const messageSentTime = new Date().toLocaleString()
        const checkOutDetails = { name, email, phone, location, message, messageSentTime,serviceName, method}
        console.log(checkOutDetails);
        
         axiosSecure.post('/checkOut', checkOutDetails)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    toast.success('CheckOut Successful')
                }
            })
            .catch(error => {
                console.log(error.message);
                
            })
 
    };
    return (
        <div>
            <div className="flex flex-col items-center md:py-8 py-2 md:w-3/4 mx-auto text-center space-y-4">
                <h1 className="text-2xl font-semibold">Checkout</h1>
                <p className="">With 3+ years in web development and Digital Marketing, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best Works.</p>
                <div className="">
                    <Link to="/contact" className="px-3 md:px-5 py-2 md:py-4 rounded-full relative group overflow-hidden font-medium contactBtn text-white inline-block ">
                        <span className="hireBtn"></span>
                        <span className="relative group-hover:text-white flex items-center gap-2"><FaLocationArrow />Contact Us</span>
                    </Link>
                </div>
            </div>
            {/* form */}
            <section className="md:p-4 ">
                <form onSubmit={handleSendMessage} noValidate="" action="" className="container flex flex-col mx-auto space-y-4">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="text-sm">Your Name</label>
                            <input id="name" name="name" type="text" placeholder="name" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 border border-gray-200" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">Email Address</label>
                            <input id="email" name="email" type="email" placeholder="Email Address" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 border border-gray-200" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="phone" className="text-sm">Phone</label>
                            <input id="phone" name="phone" type="text" placeholder="Phone Number" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 border border-gray-200" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="location" className="text-sm">Location</label>
                            <input id="location" name="location" type="text" placeholder="Location" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 border border-gray-200" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="serviceName" className="text-sm">Service Name</label>
                            <input id="serviceName" name="serviceName" type="text" placeholder="serviceName" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 border border-gray-200" />
                        </div>
                        {/* method select */}
                        <div className="col-span-full sm:col-span-3">
                            <select defaultValue="Select Payment Method" className="select" name='method' id='method'>
                                <option disabled={true}>Select Payment Method</option>
                                <option value="Payoneer">Payoneer</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Bank">Bank</option>
                            </select>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea id="message" name="message" rows={6} type="text" placeholder="message" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border border-gray-200" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="px-2 md:px-4 md:py-2 py-2 rounded-full relative group overflow-hidden font-medium contactBtn  text-white  ">
                            <span className="absolute bottom-0 left-0 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white flex items-center gap-2">Check Out</span>
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default CheckOut;