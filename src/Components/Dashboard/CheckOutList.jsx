import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hook/UseAxiosSecure";
import { Helmet } from "react-helmet-async";


const CheckOutList = () => {
     const [checkOuts, setcheckOuts] = useState([])
        const axiosSecure = UseAxiosSecure()
    
        useEffect(() => {
            axiosSecure.get(`/checkOut`)
                .then(res => {
                    setcheckOuts(res.data)
                })
                .catch(error => {
                    console.log(error.message);
                })
        }, []);
    return (        
            <div>
                <Helmet>
                                            <title>Checkout List | orbitshiftbd</title>
                                            <meta name="description" content="This is your page description for SEO." />
                                            <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
                                        </Helmet>
            <h1 className="font-semibold text-xl md:text-2xl text-center my-2">CheckOut List</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Message</th>
                                <th>Time</th>
                                <th>Method</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                    checkOuts?.map((checkOut, idx) => <tr key={checkOut._id}>
                        <th>{idx + 1}</th>
                        <td>{checkOut.name}</td>
                        <td>{checkOut.email}</td>
                        <td>{checkOut.phone}</td>
                        <td title={checkOut.message}>{checkOut.message > 20 ? checkOut.message.slice(0,30): checkOut.message}</td>
                        <td>{checkOut.messageSentTime}</td>
                        <td>{checkOut.method}</td>
                    </tr>)
                }
                            {/* row 1 */}
                            

                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
       
    );
};

export default CheckOutList;