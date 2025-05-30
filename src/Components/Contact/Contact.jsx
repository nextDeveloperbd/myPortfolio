import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaLocationArrow, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import CommonTitle from "../Commont Title/CommonTitle";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../Hook/UseAxiosSecure";


const Contact = () => {
    const axiosSecure = UseAxiosSecure();
    const handleSendMessage = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const location = e.target.location.value;
        const message = e.target.message.value;
        const messageSentTime = new Date().toLocaleString()
        const contactDetails = { name, email, phone, location, message, messageSentTime }
        axiosSecure.post('/message', contactDetails)
            .then(res => {
                console.log(res.data);
                // maingun api key:  9feddaae8d02c2837314824f6f87335d-24bda9c7-72fe1d7b
            })

    };
    
    return (
        <div>
            <Helmet>
                <title>Contact Us | Orbitshiftbd</title>
                <meta name="description" content="This is your page description for SEO." />
                <meta name="keywords" content="react, seo, meta tags, your-keywords-here" />
            </Helmet>
            <div className="flex flex-col items-center md:py-8 md:w-3/4 mx-auto text-center space-y-1 md:space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold">Contact</h1>
                <p>Interested in hiring Us for your project or just want to say hi? You can fill in the contact form below or send me an email to <Link className="text-blue-600">info@orbitshiftbd.com</Link> .Want to get connected? Follow us on the social channels below.</p>
                <div className="">
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mb-2">
                        <div className="flex gap-2 justify-center text-2xl">
                            <Link to='https://www.facebook.com/orbitshiftbd' target="_blank" className="socialBtnHover"><div className="socialIcon">  <CiFacebook /></div></Link>
                            <Link to='https://www.linkedin.com/company/orbitshift-bd/?viewAsMember=true' target="_blank" className="socialBtnHover"><div className="socialIcon"><CiLinkedin /></div></Link>
                            <Link to='https://www.instagram.com/orbitshiftbd/' target="_blank" className="socialBtnHover"><div className="socialIcon"> <FaInstagram /></div></Link>
                            <Link to='https://www.pinterest.com/webflexcode/' target="_blank" className="socialBtnHover"><div className="socialIcon"><FaPinterest /></div></Link>
                        </div>
                    </nav>
                </div>
            </div>
            <hr className=""/>

            <hr />
            {/* Contacts details */}
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center py-2 md:py-8'>
                <div className='col-span-3'>
                    <CommonTitle title={'Contact Details'} description={"We'd love to hear from you! Whether you have questions about our services, need more information, or want to discuss a new project, don't hesitate to reach out. Our team is just a message away from helping you achieve your business goals"}></CommonTitle>
                </div>

            </div>
            {/* Phone location email */}
            <div className="my-2 md:my-8 flex flex-wrap md:flex-row md:justify-between">
                {/* 1st */}
                <div className="flex gap-1 items-center  border-s-2 border-blue-600 mb-2 md:mb-0">
                    <IoIosPhonePortrait className="text-3xl md:text-5xl text-blue-600 ml-2" />
                    <div className="space-y-1 md:space-y-2">
                        <h3 className="font-semibold text-xl">Whatsapp</h3>
                        <h3>+1 (424) 244-1035</h3>
                    </div>
                </div>
                {/* 2nd */}
                <div className="flex gap-1 items-center  border-s-2 border-blue-600 mb-2 md:mb-0">
                    <CiLocationOn className="text-3xl md:text-5xl text-blue-600 ml-2" />
                    <div className="space-y-2">
                        <h3 className="font-semibold text-xl">Location</h3>
                        <h3>Dhanmondi, Dhaka-1215</h3>
                    </div>
                </div>
                {/* 3rd */}
                <div className="flex gap-1 items-center  border-s-2 border-blue-600">
                    <MdOutlineEmail className="text-3xl md:text-5xl text-blue-600 ml-2" />
                    <div className="space-y-2">
                        <h3 className="font-semibold text-xl">Email</h3>
                        <h3>info@Orbitshiftbd.com</h3>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="py-8 h-[320px] md:h-[460px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.03912029734!2d90.375862!3d23.74703065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1743302194673!5m2!1sen!2sbd" width={"100%"} height={'100%'}  ></iframe>
            </div>
            {/* Get in Touch */}
            <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center py-2 md:py-8'>
                <div className='col-span-3'>
                    <CommonTitle title={'Get In Touch'} description={"Ready to take your business to the next level? Whether you're interested in our web development services, digital marketing strategies, or need help with a project, we're excited to hear from you. Fill out the form, and one of our experts will contact you shortly!"}></CommonTitle>
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
                        <div className="col-span-full">
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea id="message" name="message" rows={6} type="text" placeholder="message" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border border-gray-200" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="px-3 md:px-5 md:py-4 py-2 rounded-full relative group overflow-hidden font-medium contactBtn  text-white  ">
                            <span className="absolute bottom-0 left-0 h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white flex items-center gap-2">Send Message</span>
                        </button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default Contact;