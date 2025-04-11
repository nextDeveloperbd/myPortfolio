import { Link } from "react-router-dom";
import { FaFilePdf, FaGithub, FaInstagram, FaPinterest } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import CommonTitle from "../Commont Title/CommonTitle";
import { GiGraduateCap } from "react-icons/gi";
import { TfiCup } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import { Helmet } from "react-helmet-async";

const Resume = () => {
    return (
        <div>
            <Helmet>
                <title>Resume | My Portfolio website</title>
            </Helmet>
            <div className="flex flex-col items-center py-8 w-3/4 mx-auto text-center space-y-4">
                <h1 className="text-2xl font-semibold">Online Resume</h1>
                <p className="">With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations.</p>

                <a href="../../assets/Resume of Md Morad Hossain.pdf" download="Md Morad's CV" className="px-5 py-4 rounded-full relative group overflow-hidden font-medium bg-[#5271ff]  text-white inline-block ">
                    <span className="hireBtn"></span>
                    <span className="relative group-hover:text-white flex items-center gap-2"><FaFilePdf />Download PDF Version</span>
                </a>

            </div>
            <hr />

            <div className="bg-gray-100 rounded-lg">
                <div >
                    <section className="md:py-12 ">
                        {/*Name and  address start */}

                        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-3 md:divide-x">
                            <div noValidate="" className="flex flex-col py-6 space-y-6 md:py-6 md:px-6 md:col-span-2">
                                <div>
                                    <h1 className="text-xl md:text-4xl font-bold">Md Morad Hossain <span className="text-sm">(CEO & Founder)</span></h1>
                                    <p className="pt-2 pb-4">Web developer and Digital Marketing Specialist</p>
                                </div>
                            </div>
                            <div className="py-6 md:py-0 md:px-6">

                                <div className="space-y-4">
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                        </svg>
                                        <span>+1 (424) 244-1035</span>
                                    </p>
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <span>merndevelpler@gmail.com</span>
                                    </p>
                                    <p className="flex items-center">
                                        <TbWorldWww className="w-5 h-5 sm:mr-6" />
                                        <span>www.webflexcode.com</span>
                                    </p>
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Dhanmondi, Dhaka-1215</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                        {/* address end */}
                    </section>
                    <hr className="md:w-4/5 mx-auto" />
                </div>
                {/*  */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center md:px-4 md:py-12">

                    <div className="col-span-1 mx-auto">
                        <img className="w-32 h-32 rounded-full " src="https://i.ibb.co.com/018RbZs/Experienced-and-energetic-social-media-manager-and-SEO-specialists.jpg
https://i.ibb.co.com/xq5H9sP1/Experienced-and-energetic-social-media-marketing-manager-and-SEO-specialists.jpg" />
                    </div>

                    <div className="col-span-4">
                        <p>Summarise your career here. You can make a PDF version of your resume using our free Sketch template here. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p>
                    </div>

                </div>
                <hr className="md:w-4/5 mx-auto" />
                {/*  */}
                {/* experience start */}
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-3 md:divide-x">
                    {/* Experience start */}
                    <div noValidate="" className="flex flex-col py-6 space-y-6 md:py-6 md:px-6 md:col-span-2">

                        <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center mt-8'>
                            <div className='col-span-3 text-blue-600'>
                                <CommonTitle title={'Work Experiences'} ></CommonTitle>
                            </div>
                        </div>
                        {/* experience 1 */}
                        <div className="mb-2">
                            <div className="flex justify-between mb-2 items-center">
                                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                                <div className="flex gap-2">
                                    <h3>Google |</h3>
                                    <h3>2023 - Present</h3>
                                </div>
                            </div>
                            <p className="mb-2">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
                            <ul className="list-disc space-y-2 md-2 md:ml-8">
                                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                            </ul>
                        </div>
                        {/* experience 1 */}
                        {/* experience 2 */}
                        <div className="mb-2">
                            <div className="flex justify-between mb-2 items-center">
                                <h3 className="text-xl font-semibold">Lead Software Developer</h3>
                                <div className="flex gap-2">
                                    <h3>Google |</h3>
                                    <h3>2016 - 2019</h3>
                                </div>
                            </div>
                            <p className="mb-2">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
                            <ul className="list-disc space-y-2 md-2 md:ml-8">
                                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                            </ul>
                        </div>
                        {/* experience 2 */}
                        {/* experience 3 */}
                        <div className="mb-2">
                            <div className="flex justify-between mb-2 items-center">
                                <h3 className="text-xl font-semibold">Senior Developer</h3>
                                <div className="flex gap-2">
                                    <h3>Uber |</h3>
                                    <h3>2014 - 2015</h3>
                                </div>
                            </div>
                            <p className="mb-2">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
                            <ul className="list-disc space-y-2 md-2 md:ml-8">
                                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                                <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                            </ul>
                        </div>
                        {/* experience 3 */}
                        {/* Projects start */}
                        <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center md:pt-8'>
                            <div className='col-span-3 text-blue-600'>
                                <CommonTitle title={'Projects'} ></CommonTitle>
                            </div>
                        </div>
                        {/* Project 1 */}
                        <div className="mb-2">
                            <div className="flex justify-between mb-2 items-center">
                                <h3 className="text-xl font-semibold">Project Lorem Ipsum</h3>

                                <h3>Open Source</h3>

                            </div>
                            <p className="mb-2">You can use this section for your side projects. You can provide a project link here as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        </div>
                        {/* Project 1 end */}
                        {/* Project 1 */}
                        <div className="mb-2">
                            <div className="flex justify-between mb-2 items-center">
                                <h3 className="text-xl font-semibold">Project Sed Fringilla</h3>
                                <h3>Open Source</h3>
                            </div>
                            <p className="mb-2">You can use this section for your side projects. You can provide a project link here as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
                        </div>
                        {/* Project 1 end */}
                        {/* Projects end */}
                    </div>
                    {/* Experience end */}
                    {/* skrills start*/}
                    <div className="flex flex-col py-6 space-y-6 md:py-6 md:px-6 md:col-span-1">
                        <div className='grid grid-cols-1 md:grid-cols-4 justify-between items-center mt-8'>
                            <div className='md:col-span-1 text-blue-600'>
                                <CommonTitle title={'Skills'} ></CommonTitle>
                            </div>
                        </div>
                        {/* experience 1 */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-semibold">Technical</h3>
                            </div>
                            <ul className="list-disc space-y-2 md-2 md:ml-8">
                                <li>JavaScript/React/Vue</li>
                                <li>Python/Ruby/PHP </li>
                                <li>Node.js/ASP.NET</li>
                                <li>PostgreSQL/MySQL </li>
                                <li>Object-oriented design</li>
                                <li>Design and implement database structures</li>
                                <li>Lead and deliver complex software systems</li>
                            </ul>
                        </div>
                        {/* experience 1 */}
                        {/* experience 2 */}
                        <div>
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-semibold">Professional</h3>
                            </div>
                            <ul className="list-disc space-y-2 mb-2 md:ml-8">
                                <li>Effective communication </li>
                                <li>Team player </li>
                                <li>Strong problem solver </li>
                                <li>Good time management</li>
                            </ul>
                        </div>
                        {/* experience 2 */}
                        {/* Education start */}
                        <div className='grid grid-cols-1  justify-between items-center mt-8'>
                            <div className='md:col-span-1 text-blue-600 text-4xl'>
                                <CommonTitle title={'Education'} ></CommonTitle>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <GiGraduateCap className="text-2xl text-blue-600" />
                                <div>
                                    <h3 className="font-semibold">Govt Bangla College</h3>
                                    <p>Higher Secondary Certificate</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <GiGraduateCap className="text-2xl text-blue-600" />
                                <div>
                                    <h3 className="font-semibold">East West University</h3>
                                    <p>Bachelor’s in Computer Science & Engineering</p>
                                </div>
                            </div>
                        </div>
                        {/* Education end */}
                        {/* Awards start */}
                        <div className='grid grid-cols-1  justify-between items-center mt-8'>
                            <div className='md:col-span-1 text-blue-600 text-4xl'>
                                <CommonTitle title={'Awards'} ></CommonTitle>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <TfiCup className="text-xl text-blue-600" />
                                <div>
                                    <h3>Award Lorem Ipsum Microsoft lorem ipsum</h3>
                                    <p>2019</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <TfiCup className="text-xl text-blue-600" />
                                <div>
                                    <h3>Award Donec Sodales Oracle Aenean</h3>
                                    <p>2017</p>
                                </div>
                            </div>
                        </div>
                        {/* Awards end */}
                        {/* Language start */}
                        <div className='grid grid-cols-1  justify-between items-center mt-8'>
                            <div className='md:col-span-1 text-blue-600 text-4xl'>
                                <CommonTitle title={'Language'} ></CommonTitle>
                            </div>
                            <div>

                                <ul className="list-disc space-y-2 mb-2 md:ml-8">
                                    <li>English </li>
                                    <li>Bangla </li>
                                </ul>
                            </div>
                        </div>
                        {/* Language end */}
                        {/* Interests start */}
                        <div className='grid grid-cols-1  justify-between items-center mt-8'>
                            <div className='md:col-span-1 text-blue-600 text-4xl'>
                                <CommonTitle title={'Interests'} ></CommonTitle>
                            </div>
                            <div>

                                <ul className="list-disc space-y-2 mb-2 md:ml-8">
                                    <li>Climbing </li>
                                    <li>Cycling </li>
                                    <li>Traveling </li>
                                    <li>Coding </li>
                                    <li>Marketing </li>
                                </ul>
                            </div>
                        </div>
                        {/* Interests end */}
                    </div>
                    {/* skills end */}
                </div>
                <hr className="mt-2 md:mt-4 md:w-5/6 mx-auto border-sky-500" />
                {/* bottom */}
                <nav className="grid-flow-col gap-4 md:place-self-center p-2 md:p-8">
                    <div className="flex gap-2 justify-center items-center text-2xl flex-wrap">
                        <div className="flex items-center">
                            <Link to='https://github.com/nextDeveloperbd' target="_blank" className="socialBtnHover"><div className="github"> <FaGithub /></div></Link>
                            <h3 className="text-base">/nextDeveloperbd</h3>
                        </div>
                        <div className="flex items-center">
                            <Link to='https://www.linkedin.com/company/orbitshift-bd/?viewAsMember=true' target="_blank" className="socialBtnHover"><div className="socialIcon"><CiLinkedin /></div></Link>
                            <h3 className="text-base">/webflexcode</h3>
                        </div>
                        <div className="flex items-center">
                            <Link to='https://www.instagram.com/orbitshiftbd/' target="_blank" className="socialBtnHover"><div className="socialIcon"> <FaInstagram /></div></Link>
                            <h3 className="text-base">/webflexcode</h3>
                        </div>
                        <div className="flex items-center">
                            <Link to='https://www.pinterest.com/webflexcode/' target="_blank" className="socialBtnHover"><div className="socialIcon"><FaPinterest /></div></Link>
                            <h3 className="text-base">/webflexcode</h3>
                        </div>


                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Resume;