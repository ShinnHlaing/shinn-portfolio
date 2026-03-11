import { useTheme } from "../contex/Theme/ThemeContext"
import { useState, useEffect } from "react";
import { heroData } from "../data/hero";

export const Hero = ({ hasAnimated }) => {
    const { theme } = useTheme();
    const heroBg = theme === "dark" ? "bg-mauve-900" : "bg-neutral-100";
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const { roles } = heroData;

    useEffect(() => {
        const currentRole = roles[currentTextIndex];

        if (!isDeleting) {
            //typing effect
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                //wait before starting to delete
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(100);
                }, 1000);
                return () => clearTimeout(timeout);
            }
        } else {
            //delet effect
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, currentText.length - 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                // Move to next word
                const timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % roles.length);
                    setTypingSpeed(150);
                }, 500);
                return () => clearTimeout(timeout);
            }
        }
    }, [currentText, currentTextIndex, isDeleting, typingSpeed, roles])


    return (
        <section id="hero" className={`relative min-h-screen flex items-center justify-center
        overflow-hidden pt-20 pb-16 ${heroBg} transition-colors duration-500`} >
            <div className="container-main">
                <div className={`grid md:grid-cols-2 grid-cols-1`}>
                    {/* left */}
                    <div className={`flex flex-col text-center items-center md:items-start md:text-start `}>
                        <h1 className={`text-2xl md:text-3xl font-bold mb-6 transition-all duration-1000 delay-200 ${hasAnimated.hero ? "opacity-100 traslate-x-0" : "opacity-0 -translate-x-30"}`} >
                            <span className={`${theme === "dark" ? "text-slate-100" : "text-gray-600"} `}>A</span>
                            <span
                                className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent px-1"
                            >Frontend Developer</span
                            >
                            <span className={`${theme === "dark" ? "text-slate-100" : "text-gray-600"}`}>For The Web</span>
                        </h1>
                        <p className={`text-lg md:text-xl ${theme === "dark" ? "text-slate-100" : "text-gray-600"} mb-8 selection:text-purple-800 transition-all duration-1000 delay-200 ${hasAnimated.hero ? "opacity-100 traslate-x-0" : "opacity-0 -translate-x-30"}`}>
                            Creating <strong>high-quality web applications</strong> with modern
                            tools and best practices for exceptional user experiences.
                        </p>
                        <div className="flex gap-2 mb-12">
                            <a
                                href="#projects"
                                className={`px-3 py-3  rounded-lg shadow-md  hover:bg-purple-700 hover:text-slate-50  hover:-translate-y-1 text-sm ${theme === "dark" ? "text-slate-100 bg-mauve-500" : "text-gray-600 bg-neutral-50"}  transition-all duration-1000 ${hasAnimated.hero ? "opacity-100 traslate-y-0" : "opacity-0 translate-y-10"} `}
                            >View Projects</a
                            >
                            <a
                                href="#about"
                                className={`px-3 py-3 text-sm  rounded-lg hover:border-purple-800 hover:text-purple-800 shadow-md  hover:-translate-y-1  ${theme === "dark" ? "text-slate-100 bg-mauve-500 " : "text-gray-600 bg-neutral-50"} transition-all duration-1000 ${hasAnimated.hero ? "opacity-100 traslate-y-0" : "opacity-0 translate-y-10"} `}
                            >Learn More</a
                            >
                        </div>
                    </div>
                    {/* right */}
                    <div
                        className={`${theme === "dark" ? "bg-mauve-700" : "bg-white/10"} rounded-lg overflow-hidden shadow-md max-h-32 transition-all duration-1000 delay-500 ${hasAnimated.hero ? "opacity-100 traslate-x-0" : "opacity-0 translate-x-30"}`}
                    >
                        <div
                            className={`flex items-center space-x-2 p-3  ${theme === "dark" ? "bg-mauve-400" : "bg-gray-200"}`}
                        >
                            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
                        </div>
                        <div className="p-6">
                            <span className={`${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`}>$ </span>
                            <span className={`${theme === "dark" ? "text-neutral-100" : "text-purple-800"}`}>
                                {currentText}
                            </span>
                            <span className=
                                {`inline-block w-0.5 h-5 ${theme === "dark" ? "bg-neutral-200" : "bg-purple-800"} ml-1 animate align-middle`}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
