'use client';
import React, { useEffect, useState } from 'react'
import MobileNavbar from './MobileNavbar';
import NavComponent from './NavComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
    const [position, setPosition] = useState<boolean>(false);
    const queryClient = new QueryClient()
    function AppearNavbar() {
        if (window.scrollY >= 200) {
            setPosition(true);
        }
        else if (window.scrollY <= 200) {
            setPosition(false);
        }

    }
    useEffect(() => {
        window.addEventListener('scroll', AppearNavbar);
    }, [])
    return (
        <div>
            <nav className="flex h-[6.5rem] max-[561px]:h-[6rem] w-full justify-center">
                <QueryClientProvider client={queryClient}>
                    <NavComponent setShowMobileNav={setShowMobileNav} />
                </QueryClientProvider>
            </nav>
            <nav className={position ? 'h-[6.5rem] max-[561px]:h-[6rem] bg-white fixed top-0 shadow-xl shadow-[rgba(0,0,0,0.15)] translate-y-0 duration-700 w-full flex items-center  justify-center  z-10' : "absolute top-0 translate-y-[-100%]  w-full flex items-center  justify-center bg-white h-[6.5rem] max-[561px]:h-[6rem]"}>
                <QueryClientProvider client={queryClient}>
                    <NavComponent setShowMobileNav={setShowMobileNav} />
                </QueryClientProvider>
            </nav>

            <main className={`flex items-center rounded-l-[2rem] justify-center h-screen width ml-2 fixed top-0 duration-700 z-10  ${showMobileNav ? 'translate-x-[0] ' : 'translate-x-[150%]'}`}>
                <QueryClientProvider client={queryClient}>
                    <MobileNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
                </QueryClientProvider>

            </main>
        </div>
    )
}




