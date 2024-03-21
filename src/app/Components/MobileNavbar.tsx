import React, { useEffect } from 'react'
import { ShoppingCart } from 'lucide-react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/Store/Store';
import { motion } from 'framer-motion';
import { getCartTotal } from '@/app/Store/Slice/cartSlice';
type ChildType = {
    showMobileNav: boolean,
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
}



const MobileNavbar: React.FC<ChildType> = ({ setShowMobileNav, showMobileNav }) => {
    const { items, totalQuantity } = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCartTotal());
    }, [items])
    return (
        <main className='flex items-center justify-center'>
            <div className='flex flex-col justify-between gap-8 my-4 items-center h-fit'>
                <X onClick={() => { setShowMobileNav(false) }} className='absolute top-0 mt-8 mr-6 right-0' />
                <div  onClick={() => { setShowMobileNav(false) }}>
                    {
                        totalQuantity === 0 ? '' :
                            <motion.span className='w-[1.2rem] h-[1.2rem] grid place-items-center rounded-full text-[12px] bg-red-600 text-white relative top-[0.35rem] font-semibold '
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {totalQuantity}
                            </motion.span>
                    }
                    <Link href={'/CartPage'}>
                        <ShoppingCart className='' />
                    </Link>
                </div>
                <ul className='flex flex-col justify-between gap-12 items-center'>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/NavCategory/Female'}>Female</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/NavCategory/Male'}>Male</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/NavCategory/Kids'}>Kids</Link>
                    </li>
                    <li className='text-[15px] hover:opacity-80 cursor-pointer select-none'>
                        <Link onClick={() => { setShowMobileNav(false) }} href={'/AllProducts'}>AllProducts</Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default MobileNavbar