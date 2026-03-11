import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        //only return dark or light
        try {
            const saved = localStorage.getItem("theme");

            if (saved) return saved;

            return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        } catch {
            return "light";
        }
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        //console.log(theme);

        try {
            localStorage.setItem("theme", theme);
        } catch (error) {
            console.error(error);
        }
    }, [theme]);

    useEffect(() => {
        const mq = window.matchMedia?.("(prefers-color-scheme: dark)");

        const handler = (e) => {
            if (!localStorage.getItem("theme"))
                setTheme(e.matches ? "dark" : "light");
        };

        //console.log(mq);

        mq?.addEventListener?.("change", handler);

        return () => mq?.removeEventListener?.("change", handler);

    }, []);

    const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);