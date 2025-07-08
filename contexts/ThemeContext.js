import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const themes = {
    light: {
        name: 'light',
        background: '#ffffff',
        text: '#333333',
        primary: '#007AFF',
        secondary: '#80deea',
        gradient: ['#e0f7fa', '#80deea'],
        cardBackground: 'rgba(0, 0, 0, 0.85)',
        borderColor: '#ddd',
    },
    dark: {
        name: 'dark',
        background: '#121212',
        text: '#ffffff',
        primary: '#4ca1af',
        secondary: '#2c3e50',
        gradient: ['#2c3e50', '#4ca1af'],
        cardBackground: 'rgba(254, 248, 248, 0.7)',
        borderColor: '#333',
    },
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(prev => (prev.name === 'light' ? themes.dark : themes.light));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
