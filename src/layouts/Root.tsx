// src/layouts/Root.tsx

import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Root = () => {
    //state that we will share with the entire app
    const [theme, setTheme] = useState('light')


    return (
        <ThemeContext.Provider value={theme}>

            <div className="flex flex-col min-h-screen text-blue-500">
                <Header />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ThemeContext.Provider >
    );
};

export default Root;