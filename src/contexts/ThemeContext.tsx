import { createContext, useState } from "react";

export const ThemeContext = createContext("light");
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}