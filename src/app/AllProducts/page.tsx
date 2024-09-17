import React from 'react'
import ProductCard from '../ProductPage/ProductCard'
import { fetchData } from '../utils/api'
import { Main } from '../ProductPage/ProductList/ProductType'

// const getData = async () => {
//   return prod
// }


const page = async () => {
  const prod: Main = await fetchData('/api/products?populate=*')
  return (
      <section className='flex justify-center'>
        <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-[4rem] gap-[3rem]'>
          {
            prod.data.map((product: any) => (
              <ProductCard key={product.id} data={product} />
            ))
          }

        </main>
      </section>
  )
}

export default page
