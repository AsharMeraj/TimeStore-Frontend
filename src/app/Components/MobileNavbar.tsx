"use client";
import React, { useEffect, useState } from 'react'
import { ChevronDown, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import cart from '/public/Images/cart.png'
import { fetchData } from '../utils/api';
import { Main } from '../ProductPage/ProductList/CategoryType';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../Store/hooks';
type ChildType = {
    showMobileNav: boolean,
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}



const MobileNavbar: React.FC<ChildType> = ({ setShowMobileNav, showMobileNav }) => {
    const { cartItems } = useAppSelector((state) => state.cart)

    const [showSubmenu, setShowSubmenu] = useState<boolean>(false)
    const ShowSubmenu = () => {
        setShowSubmenu(true)
    }
    const HideSubmenu = () => {
        setShowSubmenu(false)
    }

    useEffect(() => {
        ShowSubmenu()
        HideSubmenu()
    }, [])
    const { data } = useQuery({
        queryKey: ['mydata'],
        queryFn: async () => {
            const category: Main = await fetchData('/api/categories?populate=*')
            return category
        }
    })
    return (
        <main className='flex items-center justify-center w-full before'>
            <div className='flex flex-col justify-between gap-8 my-4 items-center h-fit'>
                <X onClick={() => { setShowMobileNav(false) }} className='absolute top-0 mt-8 mr-6 right-0' />
                <div onClick={() => { setShowMobileNav(false) }}>
                    {/* <Link href={'/Cart'}>
                        <Image alt='/' className='w-[1.5rem] relative' src={cart} />
                    </Link> */}
                    <Link href={'/Cart'}>
                        {cartItems.length > 0 && <span className='w-[1.3rem] h-[1.2rem] grid place-items-center absolute rounded-full bg-[--Primary-Color] translate-y-[-78%] translate-x-[35%] text-[12px] text-white tracking-wider '><h2 className='pt-[1.5px]'>{cartItems.length}</h2></span>}
                        <Image alt='/' className='w-[1.5rem] relative' src={cart} />
                    </Link>
                </div>
                <ul className='flex flex-col justify-between gap-12 items-center'>
                    <li className='text-[16px] hover:opacity-80 cursor-pointer select-none relative'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/'}>Home</Link>
                    </li>
                    <li id='shop' onClick={() => setShowSubmenu(!showSubmenu)} className='flex flex-col text-[15px] hover:opacity-80 cursor-pointer select-none relative'>
                        <span className='flex gap-1 justify-center'><h1>Shop</h1><ChevronDown size={20} /></span>
                        <ul id='submenu' className={showSubmenu ? `mt-2 rounded-md top-[6.5rem]  bg-white shadow-md duration-300 w-[10rem] max-lg:w-[8rem] px-2 py-4` : "hidden"}>
                            <div className='flex flex-col gap-4'>
                                <Link onClick={() => setShowSubmenu(!showSubmenu)} href={"/AllProducts"} className='hover:text-[--Primary-Color] text-black duration-200 cursor-pointer'>All watches</Link>
                                {
                                    data?.data.map((item) => {
                                        return <Link onClick={() => setShowMobileNav(false)} key={item.id} href={`/shop/${item.attributes.name}`} className='hover:text-[--Primary-Color] text-black duration-200 cursor-pointer'>{item.attributes.name}</Link>
                                    })
                                }
                            </div>
                        </ul>
                    </li>
                    <li className='text-[16px] hover:opacity-80 cursor-pointer select-none relative'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/'}>About</Link>
                    </li>
                    <li className='text-[16px] hover:opacity-80 cursor-pointer select-none relative'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/AllProducts'}>Latest</Link>
                    </li>
                    <li className='text-[16px] hover:opacity-80 cursor-pointer select-none relative'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/'}>Contact</Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default MobileNavbar