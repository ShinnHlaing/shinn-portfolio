import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { useTheme } from '../contex/Theme/ThemeContext';

export const Footer = () => {
    const { theme } = useTheme();
    const footerBg = theme === "dark" ? "bg-mauve-800" : "bg-neutral-50";

    return (
        <section className={`pt-10 px-6 ${footerBg} transition-colors duration-500`}>
            <div className="container-main">
                <div
                    className={`w-full grid grid-cols-1 gap-5 md:grid-cols-3 transition-all place-items-center  duration-500`}
                >
                    <div className="md:w-full md:justify-start flex">
                        <span className="text-3xl font-bold bg-linear-to-r from-neutral-300 via-mauve-500 to-purple-800 bg-clip-text text-transparent ">shininthemood</span>
                    </div>
                    <ul className="md:w-full flex flex-wrap justify-center gap-5 ">
                        <li>
                            <a
                                href="#about"
                                className={`${theme === "dark" ? "text-neutral-100" : "text-gray-600"} text-md transition-colors duration-100`}
                            >About</a
                            >
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className={`${theme === "dark" ? "text-neutral-100" : "text-gray-600"} text-md transition-colors duration-100`}
                            >Skills</a
                            >
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className={`${theme === "dark" ? "text-neutral-100" : "text-gray-600"} text-md transition-colors duration-100`}
                            >Projects</a
                            >
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={`${theme === "dark" ? "text-neutral-100" : "text-gray-600"} text-md transition-colors duration-100`}
                            >Contact</a
                            >
                        </li>
                    </ul>
                    <div className="md:w-full flex gap-5 md:justify-end">
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
                <div className={`${theme === "dark" ? "text-neutral-100" : "text-gray-600"} text-xs text-center transition-colors duration-100 mt-5`}>
                    <p>&copy; 2025 AlexShin Portfolio. All rights reserved.</p>
                </div>
            </div>
        </section>
    )
}
