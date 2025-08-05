import React from 'react'
import manrope from './font'
export const Container = ({children}: {children: React.ReactNode}) => {
  return (
        <div className={`flex flex-col mx-auto max-w-2xl min-h-screen px-5 md:py-2 px-4 lg:py-2 font-sans-serif ${manrope.className}`}>
            {children}
        </div>
    
  )
}
