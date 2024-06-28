'use client';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { MainDatum } from '@/app/ProductPage/ProductList/ProductType';
type PropType = {
  product: MainDatum
  key: number
}

var key = 2.5
const ProductDetailsCarousel = (props: PropType) => {
  const thumb = props.product.attributes.thumbnail.data.map(item => item.attributes.url)
  props.product.attributes.image.data.map((item) =>
    thumb.push(item.attributes.url)
  )

  
  return (
    <>
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'>
        {
          thumb?.map((url) => {
            return <img key={key+1} className='bg-black/5' src={url} alt='' width={600} height={600} />

          })
        }
      </Carousel>
    </>
  )
}

export default ProductDetailsCarousel