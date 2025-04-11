import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../Hook/UseAxiosSecure';
import { Helmet } from 'react-helmet-async';

const MessageList = () => {
    const [messages, setMessages] = useState([])
    const axiosSecure = UseAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/message`)
            .then(res => {
                setMessages(res.data)
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);
    return (
        <div>
            <Helmet>
                                        <title>Message List | orbitshiftbd</title>
                                        <meta name="description" content="This is your page description for SEO." />
                                        <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
                                    </Helmet>
            <h1>Message List</h1>
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
                            </tr>
                        </thead>
                        <tbody>
                        {
                    messages?.map((message, idx) => <tr key={message._id}>
                        <th>{idx + 1}</th>
                        <td>{message.name}</td>
                        <td>{message.email}</td>
                        <td>{message.phone}</td>
                        <td title={message.message}>{message.message > 20 ? message.message.slice(0,30): message.message}</td>
                        <td>{message.messageSentTime}</td>
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

export default MessageList;