'use client';
import Button from '@/app/Components/Button/Button';
import { MainDatum, SizeEnum } from '@/app/ProductPage/ProductList/ProductType'
import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/app/Store/hooks'
import { addToCart } from '@/app/Store/cartSlice'
import { Bounce, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
type propType = {
    SingleProduct: MainDatum
}

const SizeSelect = (props: propType) => {
    const [sizeSelection, setSizeSelection] = useState<SizeEnum>();
    const [showError, setShowError] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const count = useAppSelector((state) => state.cart.cartItems)
    const notify = () => {
        toast.success('Success. Check your cart!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            })
    }


    const setSize = (size: SizeEnum) => {
        setSizeSelection(size);
        if (showError === true) {
            setShowError(false)
        }
    };
    const DecideError = () => {
        if (sizeSelection === undefined) {
            setShowError(true)
        }
        else {
            dispatch(addToCart({data: props.SingleProduct, quantity: 1, selectedSize: sizeSelection, singlePrice: props.SingleProduct.attributes.price}))
            notify()
        }
    }
    return (
        <main className='flex flex-col min-[369px]:w-[18rem] gap-2'>
            <div className='flex justify-between'>
                <h2 className='text-[--Primary-Color]'>Select Size</h2>
                <h2 className='text-[--Primary-Color]'>Select Guide</h2>
            </div>
            <div className='grid grid-cols-3 gap-2'>
            {
                    props.SingleProduct?.attributes?.size?.data.map((size, i) => {
                        return (
                            size.enabled ? (
                                <div key={i} onClick={() => setSize(size.size)} className={`border-2 rounded-md text-center py-1 font-medium hover:border-[--Primary-Color] cursor-pointer ${sizeSelection === size.size && 'border-2 border-[--Primary-Color]'}`}>
                                    {size.size}
                                </div>
                            ) : (
                                <div key={i} className='border-2 rounded-md text-center py-1 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    {size.size}
                                </div>
                            )
                        );
                    })
                }
            </div>
            {showError && <div className='text-red-600 mt-1'>Size selection is required</div>}
            {/* Size Selection End */}
            <div onClick={() => DecideError()} className=' w-fit'>
                <Button name='ADD TO CART' />
            </div>
        </main>
    )
}

export default SizeSelect