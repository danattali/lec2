import { useContext } from 'react';
import styles from './DarkModeToggle.module.scss';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';

const DarkModeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext);
    const person = { name: 'John', age: 25 };
    console.log(person.name);
    console.log(person['name']);



    return (
        <button className={`${styles["toggle"]} ${styles[theme]}`} onClick={toggle}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
    )
}

export default DarkModeToggle