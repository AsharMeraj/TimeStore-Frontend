import { Main } from '@/app/ProductPage/ProductList/ProductType'
import React from 'react'
import ProductCard from '@/app/ProductPage/ProductCard'
import { fetchData } from '@/app/utils/api'
const getData = async () => {
    const cat: Main = await fetchData("/api/products?populate=*")
    return cat
}

const page = async ({ params }: { params: { slug: string } }) => {
    const categories = await getData()

    const productFunction = categories.data.filter((items) => {
        return items.attributes.category.data.attributes.name === params.slug
    })
    return (

            <section className='flex justify-center'>
                <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-[4rem] gap-[3rem]'>
                    {
                        productFunction?.map((item) => {
                            return <ProductCard key={item.id} data={item} />
                        })
                    }

                </main>
            </section >
    )
}

export default page


