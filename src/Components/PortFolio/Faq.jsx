
import CommonTitle from "../Commont Title/CommonTitle";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hook/UseAxiosSecure";

const Faq = () => {
    const[faqs, setFaqs] = useState([])
    const axiosSecure = UseAxiosSecure()
    useEffect(()=>{
        axiosSecure.get('/faq')
        .then(res => {
            setFaqs(res.data)            
        })
        .catch(error => {
            console.log(error.message);                
        })
    },[]);
    
    return (
        <div className='my-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center'>
                <div className='col-span-3'>
                    <CommonTitle title={'Have any questions?'} description={`You can use this section to address any queries your potential clients may have.`}></CommonTitle>
                </div>
            </div>
            {/* Accordian */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-12">
                {/* left div */}
                <div>
                    {
                        faqs?.map(faq=> <div key={faq._id} className="collapse collapse-plus bg-base-100 border border-base-300 m-1">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-semibold">{faq.question}</div>
                            <div className="collapse-content text-sm">{faq.answer}</div>
                        </div>)
                    }                   
                </div>
                {/* right div */}
                <div className="flex justify-center items-center">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/017/458/891/small_2x/light-bulb-with-shining-light-cartoon-style-flat-style-hand-drawn-style-doodle-style-symbol-of-creativity-innovation-inspiration-invention-and-ideas-illustration-vector.jpg" alt="" />
                </div>

            </div>

        </div>
    );
};

export default Faq;