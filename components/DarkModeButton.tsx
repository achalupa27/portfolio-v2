'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function DarkModeButton() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return <button>{currentTheme === 'dark' ? <SunIcon className='h-7 w-7 cursor-pointer text-amber-600/50 hover:text-amber-600 transition duration-300 ease-in-out' onClick={() => setTheme('light')} /> : <MoonIcon className='flex items-center leading-none h-7 w-7 cursor-pointer text-teal-500/50 hover:text-teal-500 transition duration-300 ease-in-out' onClick={() => setTheme('dark')} />}</button>;
}

export default DarkModeButton;
