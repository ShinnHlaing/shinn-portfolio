import { ArrowUp } from "lucide-react";

const ScrollToTop = ({ showScrollTop }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!showScrollTop) return null;

    return (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-md shadow-sm  p-3 rounded-full hover:bg-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg cursor-pointer">
            <ArrowUp className="w-5 h-5 text-purple-800 hover:text-white" />
        </button>
    );
};

export default ScrollToTop;