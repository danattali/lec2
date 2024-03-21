import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Footer = () => {
    const { toggle } = useContext(ThemeContext)
    return (
        <footer className="bg-slate-700 p-5 md:bg-orange-600 text-blue-500 text-5xl  font-extralight text-center">
            <button onClick={() => toggle()}>click me</button>
            footer © 2024

        </footer>
    )
}

export default Footer