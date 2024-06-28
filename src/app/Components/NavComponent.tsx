'use client'
import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Linked from 'next/link'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { Menu } from 'lucide-react';
import cart from "/public/Images/cart.png"
import account from "/public/Images/account.png"
import search from "/public/Images/search.png"
import { Main } from '../ProductPage/ProductList/CategoryType';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../utils/api';
import { useAppSelector } from '../Store/hooks';

type PropType = {
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavComponent = (props: PropType) => {
    const [showSubmenu, setShowSubmenu] = useState<boolean>(false)
    const { cartItems } = useAppSelector((state) => state.cart)

    const { data } = useQuery({
        queryKey: ['mydata'],
        queryFn: async () => {
            const category: Main = await fetchData('/api/categories?populate=*')
            return category
        }
    })
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

    return (
        <div className='w-[85rem] h-full min-[1600px]:w-full flex items-center justify-between mx-6 min-[1600px]:mx-[7.5rem]'>
            <h1>
                <span className='text-black text-[1.7rem] font-semibold'>Time</span>
                <span className=' text-[--Primary-Color] text-[1.7rem] font-semibold'>Store</span>
            </h1>
            <ul className='flex h-full items-center justify-between max-[840px]:hidden'>
                <Linked href='/' className='h-full flex items-center px-[2rem] max-lg:px-[1rem] text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                    <h2>Home</h2>
                </Linked>
                <li className='h-full flex items-center px-[2rem] max-lg:px-[1rem] text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                    <Link to='About'>About</Link>
                </li>
                <li id='shop' onMouseOver={() => ShowSubmenu()} onMouseOut={() => HideSubmenu()} className='h-full flex items-center px-[2rem] max-lg:px-[1rem] text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                    <span className='flex gap-1'><h1>Shop</h1><ChevronDown size={20} /></span>
                    <ul id='submenu' className={showSubmenu ? `absolute  translate-x-[-15%] rounded-md top-[6.5rem] border-t-4 border-[--Primary-Color] bg-white shadow-md duration-300 w-[10rem] max-lg:w-[8rem] px-2 py-4` : `absolute hidden translate-x-[-15%] rounded-md top-[6.5rem] border-t-4 border-[--Primary-Color] bg-white shadow-md duration-300 w-[10rem] max-lg:w-[8rem] px-2 py-4`}>
                        <div className='flex flex-col gap-4'>
                            <h2 className='absolute top-0 translate-y-[-70%] translate-x-[10px] text-[0.9rem] text-[--Primary-Color]'>&#9650;</h2>
                            <Linked href={"/AllProducts"} className='hover:text-[--Primary-Color] text-black duration-200 cursor-pointer'>All watches</Linked>
                            {
                                data?.data?.map((item) => {
                                    return <Linked key={item.id} href={`/shop/${item.attributes.name}`} className='hover:text-[--Primary-Color] text-black duration-200 cursor-pointer'>{item.attributes.name}</Linked>
                                })
                            }
                        </div>
                    </ul>
                </li>
                <li className='h-full flex items-center px-[2rem] max-lg:px-[1rem] text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                    <Linked href={'/AllProducts'}>Latest</Linked>
                    <span className='w-[2.3rem] h-[1.3rem] pt-[5px] text-center align-text-center absolute rounded-lg translate-y-[-1.5rem] translate-x-[2rem] bg-[--Primary-Color] shadow-sm shadow-[rgb(150,150,150)] text-[9px] text-white font-bold tracking-wider '>HOT</span>
                </li>

                <li className='h-full flex items-center px-[2rem] max-lg:px-[1rem] text-[16px] font-semibold hover:text-[--Primary-Color] duration-200 cursor-pointer select-none'>
                    <Linked href={'/AllProducts'}>Contact</Linked>
                </li>
            </ul>
            <div className='flex flex-row gap-6 max-[840px]:hidden'>
                <Image alt='/' className='w-[1.2rem] cursor-pointer' src={search} />
                <Image alt='/' className='w-[1.2rem] cursor-pointer' src={account} />
                <Linked href={'/Cart'}>
                    {cartItems.length > 0 && <span className='w-[1.3rem] h-[1.2rem] grid place-items-center absolute rounded-full bg-[--Primary-Color] translate-y-[-78%] translate-x-[35%] text-[12px] text-white tracking-wider '><h2 className='pt-[1.5px]'>{cartItems.length}</h2></span>}
                    <Image alt='/' className='w-[1.2rem] cursor-pointer' src={cart} />
                </Linked>
            </div>
            {/* Only for Mobile */}
            <Menu onClick={() => { props.setShowMobileNav(true) }} className='hidden max-[840px]:block cursor-pointer' />
        </div>
    )
}

export default NavComponent