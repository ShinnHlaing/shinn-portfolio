import { useState, useEffect } from "react";
import { Menu, X, Dock, Atom, Presentation, Mails, Sun, Moon, FishSymbol } from "lucide-react";
import { useTheme } from "../contex/Theme/ThemeContext";

export default function NavBar() {
    const { theme, toggle } = useTheme();
    const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navbarBg = theme === "dark" ? "bg-white/20 text-slate-100" : "bg-white/10 text-gray-700";

    const mobileMenuBg = theme === "dark" ? "bg-white/20 text-slate-100" : "bg-white/10 text-gray-700";


    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileMenuOpen);
    }

    const closeMobileMenu = () => {
        setIsMobileOpen(false);
    }

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 60;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            })
        }
        // close menu when in mobliemenu open 
        closeMobileMenu();
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    const navItems = [
        { href: "#about", label: 'About', icon: <Dock /> },
        { href: "#skills", label: 'Skill', icon: <Atom /> },
        { href: "#projects", label: 'Project', icon: <Presentation /> },
        { href: "#contact", label: 'Contact', icon: <Mails /> },
    ]


    return (
        <nav className='fixed top-0 z-50 w-full transition-all duration-300'>
            <div className="container-main">
                <div className={`flex justify-between items-center rounded-lg px-3 py-3 ${isScrolled ? 'backdrop-blur-md shadow-md' : 'backdrop-blur-sm shadow-sm'} ${navbarBg}`}>
                    <div className="flex gap-1 items-center text-lg font-bold cursor-pointer hover:opacity-80" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className=" hover:text-fuchsia-700">AlexShin</span>
                        <FishSymbol size={26} color="#7d00d1" />
                    </div>
                    {/* need to add hidden */}
                    <div className="hidden md:flex space-x-4">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className={`flex gap-1 transition-colors text-sm hover:text-fuchsia-700`} onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                            }}>
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={toggle} className={`transition-colors cursor-pointer hover:text-fuchsia-700`}>
                            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        {/* mobile menu icon */}
                        <button onClick={toggleMobileMenu} className={`md:hidden transition-colors cursor-pointer hover:text-fuchsia-700`}>
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={`md:hidden transition-all duration-100 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className={`${mobileMenuBg} backdrop-blur-md  rounded-lg shadow-md p-4 space-y-4`}>
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className={`flex gap-1 transition-colors text-sm hover:text-purple-800`} onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                            }}>
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
