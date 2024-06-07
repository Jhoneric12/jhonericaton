'use client'

import React, { createContext, useEffect, useState } from 'react'

export const DarkMode = createContext();

export default function ThemeProvider({children}) {

    const [isDark, setIsDark] = useState(false);

    useEffect(()=> {

      if (window.matchMedia('(prefer-media: dark)')) {
        setIsDark(true)
      }
      else {
        setIsDark(false)
      }

    }, []);

  return (
    <DarkMode.Provider value={{isDark, setIsDark}}>
        <div className={`${isDark && 'dark'}`}>
            {children}
        </div>
    </DarkMode.Provider>
  )
}
