'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '/public/Logo.png'
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import MobileNavbar from './MobileNavbar';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/Store/Store';
import { motion } from 'framer-motion'
import { getCartTotal } from '@/app/Store/Slice/cartSlice';
type ParentType = {
    showMobileNav: boolean,
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}


export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
    const { items, totalQuantity } = useSelector((state: RootState) => state.cart);
    const fullCartStore = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal());
    }, [items])
    return (
        <>
            <main className='w-full flex items-center justify-center py-10 max-[550px]:py-[2.5rem] '>
                <div className='w-[75rem] flex items-center justify-between mx-6'>
                    <Link href={'/'}><Image alt='Logo' src={Logo} priority /></Link>
                    {/* Nav-links */}
                    <motion.ul className='flex items-center justify-between gap-x-8 max-lg:gap-x-6 max-[920px]:hidden'>
                        <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                            <Link href={'/NavCategory/Female'}>Female</Link>
                        </li>
                        <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                            <Link href={'/NavCategory/Male'}>Male</Link>
                        </li>
                        <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                            <Link href={'/NavCategory/Kids'}>Kids</Link>
                        </li>
                        <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                            <Link href={'/AllProducts'}>AllProducts</Link>
                        </li>
                    </motion.ul>

                    <label htmlFor="search" className='max-[920px]:hidden'>
                        <Search className='w-[1rem] absolute ml-2' />
                        <input className='w-[18rem] border border-[rgb(153,153,153)] h-[1.55rem] focus:outline-none pl-8 pr-2 rounded-lg py-1 placeholder:text-[14px]' placeholder='Search' type="search" id='search' />
                    </label>
                    <Link href={'/CartPage'} className='max-[920px]:hidden w-[2rem] h-[2rem] p-[5px] cursor-pointer duration-300'>
                        {
                            totalQuantity === 0 ? '' :
                                <motion.span className='w-[1.2rem] h-[1.2rem] grid place-items-center rounded-full text-[12px] bg-red-600 text-white absolute top-[2rem] font-semibold '
                                initial={{scale: 0}}
                                whileInView={{scale: 1}}
                                transition={{duration: 0.2}}
                                >
                                    {totalQuantity}
                                </motion.span>
                        }
                        <div >
                            <ShoppingCart className='w-full h-full' />
                        </div>
                    </Link>
                    {/* Only for Mobile */}
                    <Menu onClick={() => { setShowMobileNav(true) }} className='hidden max-[920px]:block cursor-pointer' />
                </div>
            </main>
            <main className={`bg-white flex items-center justify-center height width ml-2 fixed top-0 duration-700 z-10  ${showMobileNav ? 'translate-y-[0] shadow-lg shadow-[rgb(150,150,150)]' : 'translate-y-[-100%]'}`}>
                <MobileNavbar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />
            </main>
        </>
    )
}
