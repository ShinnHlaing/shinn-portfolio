import { FaGithub } from "react-icons/fa6";

import { projects } from "../data/projects";
import { useTheme } from "../contex/Theme/ThemeContext";

export const Projects = ({ hasAnimated }) => {
    const { theme } = useTheme();
    const projectBg = theme === "dark" ? "bg-mauve-800" : "bg-neutral-50";
    return (
        <section className={`py-10 px-6 ${projectBg} transition-colors duration-500`} id="projects">
            <div className="container-main">
                <div className="">

                    <div className={`${theme === "dark" ? "bg-mauve-300 text-purple-800" : "bg-neutral-50 text-gray-600"} shadow-md py-2 px-4 rounded-full w-50 text-center mx-auto mb-10 transition-all duration-500 ${hasAnimated.projects ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-30'}`}>
                        <h2 className="text-md md:text-xl font-semibold">
                            Feature Projects
                        </h2>
                    </div>
                    {/* project card */}
                    <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 transition-all duration-500 delay-200 ${hasAnimated.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {projects.map((item, index) => (
                            <div
                                key={index}
                                className={`${theme === "dark" ? "bg-mauve-600 text-neutral-200" : "bg-transparent text-gray-600"} rounded-md shadow-md hover:shadow-lg transition-all duration-500`}
                            >
                                <div className="h-44 relative">
                                    <img

                                        alt="Crypto Platform"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>
                                <div className="flex flex-col gap-5 p-8">
                                    <h3 className="text-xl font-semibold ">{item.title}</h3>
                                    <p className="text-sm md:text-[16px]">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {item.tech.map((tool, toolIndex) => (
                                            <span
                                                key={toolIndex} className={`${theme === "dark" ? "bg-neutral-300 text-neutral-600" : "bg-gray-200 text-gray-600 "} 
                                                hover:bg-purple-800 hover:text-neutral-100 px-4 py-2 rounded-full text-sm transition-all 
                                                duration-500 shadow-sm transform hover:-translate-y-1`}
                                            >{tool}</span
                                            >
                                        ))}
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <a
                                            href={item.demo}
                                            target="_blank"
                                            className={`${theme === "dark" ? "bg-mauve-700" : "bg-white/10"} px-4 py-2  shadow-md  rounded-lg hover:bg-purple-800 hover:text-white transition-colors`}
                                        >
                                            Demo
                                        </a>
                                        <a
                                            href={item.github}
                                            className={`${theme === "dark" ? "bg-mauve-500" : "bg-white/10"} flex items-center gap-2 px-4 py-2  shadow-md  rounded-lg hover:bg-purple-800 hover:text-white transition-colors`}
                                        >
                                            <FaGithub /><span>Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div >
        </section >
    )
}
