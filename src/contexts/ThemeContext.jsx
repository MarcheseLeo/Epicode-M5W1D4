import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState(true)
    const computedTheme = theme ? 'light' : 'dark' 

    const toggleTheme = () => setTheme(!theme)

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
                computedTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
