import { FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { useTheme } from "../contex/Theme/ThemeContext";

export const Skills = ({ hasAnimated }) => {
    const { theme } = useTheme();
    const skillBg = theme === "dark" ? "bg-mauve-900" : "bg-neutral-100";
    const skills = [
        { title: "Javascript", icon: <FaJsSquare className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "Typescript", icon: <BsTypescript className={`text-4xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "NodeJs", icon: <FaNodeJs className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "React", icon: <FaReact className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "Tailwind", icon: <RiTailwindCssFill className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "NextJs", icon: <RiNextjsFill className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "Javascript", icon: <FaJsSquare className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "Typescript", icon: <BsTypescript className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "NodeJs", icon: <FaNodeJs className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "React", icon: <FaReact className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "Tailwind", icon: <RiTailwindCssFill className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
        { title: "NextJs", icon: <RiNextjsFill className={`text-5xl  ${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`} /> },
    ]

    return (
        <section className={`py-10 px-6 ${skillBg} transition-colors duration-500`} id="skills">
            <div className="container-main">
                <div className={``}>

                    <div className={`${theme === "dark" ? "bg-mauve-300 text-purple-800" : "bg-neutral-50 text-gray-600"} shadow-md py-2 px-4 rounded-full w-50 text-center mx-auto mb-10 transition-all duration-1000 ${hasAnimated.skills ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-30'}`}>
                        <h2 className="text-md md:text-xl font-semibold">
                            Skills & Tools
                        </h2>
                    </div>
                    {/* crousel */}
                    <div className="flex mx-auto overflow-x-auto carousel">
                        <div className="flex gap-5 pr-4 animate-carousel">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex flex-col grow-0 shrink-0 basis-20 h-20 rounded-md items-center justify-center">
                                    {skill.icon}
                                </div>
                            ))}
                        </div>
                        {/* hidden group */}
                        <div aria-hidden="true" className="flex gap-5 pr-4 animate-carousel">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex flex-col grow-0 shrink-0 basis-20 h-20 rounded-md items-center justify-center">
                                    {skill.icon}

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}
