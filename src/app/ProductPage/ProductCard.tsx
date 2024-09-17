import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GetDiscountedPrice from '../utils/Discount'
import { MainDatum } from './ProductList/ProductType'



const ProductCard = ({data}:{data:MainDatum}) => {
    return (
        <div className='w-fit m-auto focus:outline-none hover:scale-105 duration-200 cursor-pointer'>
            <Link href={`/AllProducts/${data.id}`} as={`/AllProducts/${data.id}`}>
                <Image className='max-[320px]:w-[12rem] w-[14rem] sm:w-[18rem] bg-[rgb(246,246,246)] border-b-4 border-[--Primary-Color] m-auto' alt='' width={600} height={600} src={`${data.attributes.thumbnail.data.map(data => data.attributes.url)}`} />
                <h2 className='max-[320px]:w-[12rem] w-[14rem] sm:w-[16rem] font-semibold text-[1rem] max-[840px]:text-[1rem] mt-4'>
                    {data.attributes.name}
                </h2>
                <div className='flex items-center text-black/[0.7]'>
                    <p className='mr-2 text-lg font-medium'>
                        ${data.attributes.price}
                    </p>
                    <p className='mr-2 text-base line-through font-medium'>
                        ${data.attributes.original_price}
                    </p>
                    <p className='ml-auto text-base font-medium text-[--Primary-Color]'>
                        {GetDiscountedPrice(data.attributes.original_price, data.attributes.price)}% off
                    </p>
                </div>
            </Link>
        </div >

    )
}

export default ProductCard