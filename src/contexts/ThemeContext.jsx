import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState(()=>{
        const savedTheme = localStorage.getItem('app-theme')
        if(savedTheme !==null)
            return JSON.parse(savedTheme)
        return true
    })
    const computedTheme = theme ? 'light' : 'dark' 
    const toggleTheme = () => setTheme(!theme)

    useEffect(()=>{
        localStorage.setItem('app-theme', JSON.stringify(theme))
    }, [theme])
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
