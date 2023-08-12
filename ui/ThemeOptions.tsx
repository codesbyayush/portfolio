'use client'

import React from 'react'
import { useTheme } from 'next-themes'

const themes = ['day', 'alpha', 'night', 'beta', 'qwerty']
const ThemeOptions = () => {

    const { theme, setTheme } = useTheme();

  return (
      <div className='absolute -right-4 grid px-2 py-2 gap-1 rounded-sm bg-skin-main-color'>
          {
              themes.map(option => (
                  <button className={`border border-black rounded-md bg-skin-sidebar-color text-skin-base px-8 py-3 ${theme === option ? 'outline -outline-offset-8 outline-black outline-4' : ''}`}
                  onClick={() => setTheme(option)}>
                      {option}
                  </button>
              ))
          }
    </div>
  )
}

export default ThemeOptions