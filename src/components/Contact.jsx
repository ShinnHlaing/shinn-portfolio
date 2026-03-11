import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useTheme } from "../contex/Theme/ThemeContext";

export const Contact = ({ hasAnimated }) => {
    const { theme } = useTheme();
    const contactBg = theme === "dark" ? "bg-mauve-900" : "bg-neutral-100";
    return (
        <section
            id="contact"
            className={`py-10 px-6 ${contactBg} transition-colors duration-500`}
        >
            <div className="container-main">
                <div className="">
                    {/*  */}
                    <div className={`${theme === "dark" ? "bg-mauve-300 text-purple-800" : "bg-neutral-50 text-gray-600 "} shadow-md py-2 px-4 rounded-full w-50 text-center mx-auto mb-10 transition-all duration-1000 ${hasAnimated.contact ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-30'}`}>
                        <h2 className="text-md md:text-xl font-semibold">
                            Let's Connect
                        </h2>
                    </div>
                    {/* <!-- 
                     Contact Form -->  
                     */}
                    <div className={`w-full mx-auto relative transition-all duration-1000 delay-200 ${hasAnimated.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <form
                            id="contactForm"
                            className={`${theme === "dark" ? "bg-mauve-600 text-neutral-200" : "bg-transparent text-gray-600 border-4 border-t-purple-800/30 border-l-purple-800/50 border-r-purple-300 border-b-purple-800/30"} w-[60%]  h-full rounded-xl shadow-md flex flex-col gap-5 mx-auto pb-10 pt-5`}
                        >
                            <div className="flex md:flex-row flex-col items-center justify-between">
                                <div className={`${theme === "dark" ? "bg-mauve-900" : "bg-gray-400 text-slate-100"} flex gap-3  py-2 px-2 items-center shadow-md justify-center rounded-r-lg  mt-5`}>
                                    <div className=" text-xs py-1 text-center rounded-full w-22 bg-white/10 hover:bg-purple-900">Social links</div>
                                    <a
                                        href="https://github.com/ShinnHlaing" target="_blank" rel="noopener noreferrer"
                                        className=" cursor-pointer  transition-colors hover:text-purple-800"
                                    >
                                        <FaGithub className='text-2xl' />
                                    </a>
                                    <a
                                        href="https://discord.com/users/757793285237506058" target="_blank" rel="noopener noreferrer"
                                        className="cursor-pointer transition-colors
                                        hover:text-purple-800"
                                    >
                                        <FaDiscord className='text-2xl' />
                                    </a>
                                    <a
                                        href="#"
                                        className="cursor-pointer transition-colors hover:text-purple-800" target="_blank" rel="noopener noreferrer"
                                    >
                                        <CiLinkedin className='text-2xl' />
                                    </a>
                                </div>
                                <div className={`${theme === "dark" ? "bg-mauve-900" : "bg-gray-400 text-slate-100"} text-sm shadow-md py-2 px-2 rounded-l-lg flex items-center justify-center gap-1 mt-5 `}><MdOutlineMarkEmailUnread className="text-xl hover:text-purple-900" /> <span>shinhlaing.htp@gmail.com</span></div>
                            </div>

                            {/* input msg */}
                            <div className="flex flex-col px-5">
                                <div className="py-2 px-2 rounded-lg">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="Enter your name"
                                        className={`${theme === "dark" ? "bg-mauve-700 text-neutral-200" : "bg-gray-300 text-gray-600"} w-full px-4 py-2 rounded-lg shadow-sm  
                                            focus:border-none transition-colors duration-150 outline-none`}
                                    />
                                </div>
                                <div className=" py-2 px-2 rounded-lg">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="Email"
                                        className={`${theme === "dark" ? "bg-mauve-700 text-neutral-200" : "bg-gray-300 text-gray-600"} w-full px-4 py-2 rounded-lg shadow-sm  
                                            focus:border-none transition-colors duration-150 outline-none`}
                                    />
                                </div>
                                <div className=" py-2 px-2 rounded-lg">

                                    <textarea
                                        type="text"
                                        name="message"
                                        id="message"
                                        rows="4"

                                        required
                                        placeholder="Enter your message"
                                        className={`${theme === "dark" ? "bg-mauve-700 text-neutral-200" : "bg-gray-300 text-gray-600"} w-full px-4 py-2 rounded-lg shadow-sm  
                                            focus:border-none transition-colors duration-150 outline-none`}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={`${theme === "dark" ? "bg-mauve-700" : "bg-white/10"} py-2  shadow-md  rounded-lg hover:bg-purple-800 hover:text-white w-30 mx-auto text-sm   transition-all duration-300 transform hover:-translate-y-1`}
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
