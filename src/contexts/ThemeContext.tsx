import { useState } from "react";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggle = () => {
        const newValue = theme == "light" ? "dark" : "light";

        if (newValue === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }

        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
}
