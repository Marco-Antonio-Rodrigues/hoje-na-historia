'use client'

import { useEffect, useState } from "react";
import { IconThemeDark, IconThemeLight } from "./Icon"

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');


    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      
      if (defaultTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
      
      setTheme(defaultTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} className="transition-transform duration-1000 hover:scale-150">
            {
                theme === 'light'?
                <IconThemeDark/>
                :
                <IconThemeLight/>
            }
        </button>
    )
}

export default ThemeSwitcher;