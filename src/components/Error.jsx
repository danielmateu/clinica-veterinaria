import React from 'react'

export const Error = ({children}) => {
    return (
        <div className="bg-red-100 transition-all hover:bg-red-800 hover:text-slate-400 text-red-700  text-center p-2 rounded-lg mb-2">
            {children}
        </div>
    )
}
