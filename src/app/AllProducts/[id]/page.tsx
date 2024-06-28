import { Main, MainDatum } from '@/app/ProductPage/ProductList/ProductType'
import React from 'react'
import ProductDetailsCarousel from './ProductDetailsCarousel'
import RelatedProducts from './RelatedProducts'
import { fetchData } from '@/app/utils/api'
import SizeSelect from './SizeSelect'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = async ({ params }: { params: { id: number } }) => {
  const products: Main = await fetchData('/api/products?populate=*')
  const productFunction = (id: number) => {
    return products.data.filter((product: MainDatum) => (
      product.id === +id
    ))
  }
  const SpecificProduct = productFunction(+params.id)
  const singleProduct: MainDatum = SpecificProduct[0]
  return (
    <>

        <ToastContainer />
        <div className='flex w-full md:py-20 justify-center'>
          <div className='flex gap-12 items-center lg:items-start flex-col mx-6 max-md:mx-6 min-[1400px]:mx-[7.5rem] lg:flex-row  '>

            {/* --------left column start-------- */}
            <div className=' grid w-[20rem] max-[368px]:w-full sm:w-[30rem] md:w-[40rem] min-[1700px]:w-[50rem] min-[1400px]:w-[40rem] '>
              <ProductDetailsCarousel key={singleProduct.id} product={singleProduct} />
            </div>
            {/* --------left column end-------- */}




            {/* --------right column start-------- */}
            <div className=''>
              <main className='flex flex-col gap-8 py-3'>
                {/* Headings Start */}
                <div className='flex flex-col g'>
                  <h1 className='leading-snug font-bold text-black max-w-[28rem] text-[1.5rem] sm:text-[1.6rem] md:text-[1.9rem] lg:text-[2rem]'>{singleProduct.attributes.name}</h1>
                  <p className='font-semibold max-w-[28rem] text-[1.2rem] sm:text-[1.4rem] text-black/60'>{singleProduct.attributes.category.data.attributes.name}</p>
                </div>
                {/* Headings End */}

                {/* Price And Other Text Start */}
                <div className='flex flex-col'>
                  <h2 className='text-[--Primary-Color] font-semibold text-[1.2rem]'>MRP : $ {singleProduct.attributes.price}</h2>
                </div>
                {/* Price And Other Text End */}

                {/* Size Selection Start */}
                <SizeSelect SingleProduct={singleProduct} />

              </main>
            </div>
            {/* --------right column end-------- */}

          </div>
        </div>
        <div className='z-0 relative'>
          <RelatedProducts singleproducts={singleProduct} allproducts={products.data} />
        </div>
    </>
  )
}

export default page
