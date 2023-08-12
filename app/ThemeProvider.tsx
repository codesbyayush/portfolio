'use client'
import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

type props = {
    children: ReactNode
}

const Theme = ({ children }:props) => {
      return (
        <ThemeProvider attribute="class" themes={['day',
        'night','alpha', 'beta','qwerty']}>
            {children}
          </ThemeProvider>
                
  )
}

export default Theme