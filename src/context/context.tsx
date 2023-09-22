"use client";

import React, { useState, createContext, useContext } from 'react'


interface ContextProps {
    children: React.ReactNode
}

interface ContextType {
    currentPage: string,
    setCurrentPage: React.Dispatch<React.SetStateAction<'intro' | 'chat' | 'welcome'>>
}

export const ContextPage = createContext<ContextType | null>(null);


export default function Context({
    children
}: ContextProps) {

    const [currentPage, setCurrentPage] = useState<'intro' | 'chat' | 'welcome'>('intro');
    return (
        <ContextPage.Provider value={{
            currentPage,
            setCurrentPage
        }}>
            {children}
        </ContextPage.Provider>
    )
}



export function useContextPage() {
    const context = useContext(ContextPage);

    if (context === null) {
        throw new Error(
            "Use it Inside ContextPage"
        )
    }

    return context;
}