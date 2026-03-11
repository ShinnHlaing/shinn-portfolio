import { Gem, Leaf, Snowflake, Sparkle } from 'lucide-react';
import profile2 from "../assets/profile2.jpg"
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { useTheme } from "../contex/Theme/ThemeContext"
import { Features } from '../data/Features';

export const About = ({ hasAnimated }) => {
    const { theme } = useTheme();
    const aboutBg = theme === "dark" ? "bg-mauve-800" : "bg-neutral-50";



    return (
        <section id="about" className={`py-10 px-6 ${aboutBg} transition-colors duration-500`}>
            <div className="container-main">
                <div className="">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="flex flex-col gap-6">
                            <div
                                className={`w-60 h-60 mx-auto relative  transition-all duration-1000 delay-200 ${hasAnimated.about ? "opacity-100 traslate-x-0" : "opacity-0 -translate-x-30"}`}
                            >
                                <div className={`w-60 h-60 absolute -right-1/2 -left-1/2  rounded-full shadow-lg mx-auto transition-all duration-300 z-50 ${theme === "dark" ? "bg-black/20" : "bg-white/10"
                                    }`}>
                                    <Leaf className="w-10 h-10 absolute top-2 left-1  text-purple-800 rounded-full shadow-md bg-transparent backdrop-blur-md" />
                                    <Snowflake className="w-10 h-10 absolute top-10 -right-5  text-purple-800 rounded-full shadow-md bg-transparent backdrop-blur-md" />
                                    <Gem className="w-10 h-10 absolute top-40 -left-5   text-purple-800 rounded-full shadow-md bg-transparent backdrop-blur-md " />
                                    <Sparkle className="w-10 h-10 absolute top-50 right-3   text-purple-800 rounded-full shadow-md bg-transparent backdrop-blur-md " />
                                </div>

                                <img
                                    src={profile2}
                                    alt="Profile Photo"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className={`text-md  flex flex-col gap-3 transition-all duration-1000 delay-300 ${hasAnimated.about ? "opacity-100 traslate-x-0" : "opacity-0 -translate-x-30"}`}>
                                <p className={`text-sm md:text-[16px] ${theme === "dark" ? "text-neutral-100" : "text-gray-600"} transition-all duration-500`}>I'm a passionate frontend developer with 2+ years of experience in creating unique websites.
                                    I specialize in Javascript, React, TypeScript, and modern CSS frameworks to build scalable, performant applications.</p>

                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/ShinnHlaing" target="_blank" rel="noopener noreferrer"
                                        className="text-purple-800 cursor-pointer  transition-colors"
                                    >
                                        <FaGithub className='text-2xl' />
                                    </a>
                                    <a
                                        href="https://discord.com/users/757793285237506058" target="_blank" rel="noopener noreferrer"
                                        className="text-purple-800 cursor-pointer transition-colors"
                                    >
                                        <FaDiscord className='text-2xl' />
                                    </a>
                                    <a
                                        href="#"
                                        className="text-purple-800 cursor-pointer transition-colors" target="_blank" rel="noopener noreferrer"
                                    >
                                        <CiLinkedin className='text-2xl' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Features.map((feature, index) => (
                                <div key={index} className={`${theme === "dark" ? "bg-mauve-500 text-neutral-100" : "bg-transparent text-gray-600"} hover:-translate-y-2 px-3 py-5 rounded-lg shadow-sm flex flex-col md:items-start md:text-start items-center text-center gap-3 transition-all duration-1000 delay-${feature.second} ${hasAnimated.about ? "opacity-100 traslate-x-0" : "opacity-0 translate-x-30"}`}>
                                    {<feature.icon className='text-purple-800' />}
                                    <h3 className="font-semibold">{feature.title}</h3>
                                    <p className="text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
