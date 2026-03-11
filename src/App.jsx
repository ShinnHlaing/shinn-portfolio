import NavBar from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useScrollToTop } from "./hooks/useScrollToTop";

const App = () => {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <div className='font-inter min-h-screen overflow-x-hidden'>
      <NavBar />
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
      <Skills hasAnimated={hasAnimated} />
      <Projects hasAnimated={hasAnimated} />
      <Contact hasAnimated={hasAnimated} />
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  )
}

export default App