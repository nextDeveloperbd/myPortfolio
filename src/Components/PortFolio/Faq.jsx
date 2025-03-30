import { FaLocationArrow } from "react-icons/fa";
import CommonTitle from "../Commont Title/CommonTitle";
import { Link } from "react-router-dom";


const Faq = () => {
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
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title font-semibold">How do I create an account?</div>
                        <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                        <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title font-semibold">How do I update my profile information?</div>
                        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                    </div>
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