import React from 'react'
import Image from 'next/image'
import { Trash } from 'lucide-react'
import { useAppSelector } from '../Store/hooks'
import { RootState } from '../Store/store'
import { useAppDispatch } from '../Store/hooks'
import { removeFromCart, updateCart } from '../Store/cartSlice'
import { MainDatum } from '../ProductPage/ProductList/ProductType'
const CartCard = () => {
    const { cartItems } = useAppSelector((state: RootState) => state.cart)
    const dispatch = useAppDispatch()
    const updateCartItems = (e: React.ChangeEvent<HTMLSelectElement>, key: string, item: MainDatum) => {
        let payload = {
            key: key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            data: item
        }
        dispatch(updateCart(payload))
    }
    return (
        <div className='w-full flex flex-col items-center mr-[4rem] max-[920px]:mr-0 '>
            {
                cartItems?.map((item, i) => (

                    <section key={i} className='w-full flex max-[558px]:flex-col items-center justify-center'>
                        <div className='flex  my-8 w-full max-[558px]:min-w-full items-center max-[558px]:items-start '>
                            <Image width={600} height={600} className='w-[10rem] max-[558px]:w-[7rem] max-[360px]:w-[6rem] bg-black/5' alt='/' src={`${item.data.attributes.thumbnail.data.map((img) => img.attributes.url)}`} />
                            <div className='flex flex-col h-[8rem] max-[558px]:h-[7rem] max-[300px]:h-fit justify-between w-full max-[920px]:gap-2 max-[460px]:gap-0 ml-[1.5rem] max-[558px]:ml-[0.5rem]'>
                                <main className='flex flex-col gap-2 '>
                                    <div className='flex w-full max-[558px]:min-w-full items-center justify-between'>
                                        <h2 className='text-[1.3rem] font-bold text-black/70 max-[634px]:text-[1rem] max-[360px]:text-[0.9rem] leading-snug'>{item.data.attributes.name}</h2>
                                        <p className='text-black/60 font-bold text-right text-[0.9rem] max-[360px]:text-[0.8rem]'>MRP : ${item.data.attributes.price.toFixed(1)}</p>
                                    </div>
                                    <h2 className='font-semibold text-[rgb(150,150,150)] max-[634px]:text-[14px]'>{item.data.attributes.category.data.attributes.name}</h2>
                                </main>
                                <div className='flex w-full justify-between max-[558px]:min-w-full items-center mt-2'>
                                    <main className='flex max-[460px]:flex-col max-[460px]:gap-0 w-fit gap-4'>
                                        <div className='flex gap-2'>
                                            <div className='flex items-center'>
                                                <h2 className='text-black/70 font-semibold max-[360px]:text-[0.9rem]'>Size:</h2>
                                            </div>
                                            <select
                                                onChange={(e) => updateCartItems(e, 'selectedSize', item.data)}
                                                className='cursor-pointer max-[360px]:text-[0.8rem] focus:outline-none hover:text-black'
                                                defaultValue={item.selectedSize}>
                                                {
                                                    item?.data?.attributes?.size?.data?.map((size, i) => (
                                                        <option
                                                            key={i}
                                                            className=''
                                                            value={size.size}
                                                            disabled={!size.enabled ? true : false}
                                                        >{size.size}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>

                                        <div className='flex gap-2'>
                                            <div className='flex items-center'>
                                                <h2 className='text-black/70 font-semibold max-[360px]:text-[0.9rem]'>Quantity:</h2>
                                            </div>
                                            <select
                                                onChange={(e) => updateCartItems(e, 'quantity', item.data)}
                                                className='p cursor-pointer focus:outline-none max-[360px]:text-[0.8rem] hover:text-black'
                                                defaultValue={item.quantity}>
                                                {Array.from({ length: 10 }, (_, i) => i + 1).map((quantity, i) => {
                                                    return (
                                                        <option
                                                            key={i}
                                                            className=''
                                                            value={quantity}
                                                        >{quantity}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </main>
                                    <div>
                                        <Trash
                                            onClick={() => dispatch(removeFromCart({ data: item.data }))} className='cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                ))

            }
        </div>
    )
}

export default CartCard


{/* <>
            {cartItems.length > 0 && (
                <section className='w-full justify-between px-6 py-6'>
                    <h1 className='text-[1.5rem] w-[75rem] max-[1255px]:w-full   font-bold m-auto mb-8 max-[558px]:w-fit'>Shopping Cart</h1>
                    <main className='flex w-[75rem] max-[1255px]:w-full m-auto max-[920px]:flex-col justify-between'>
                        <CartCard />
                        <main className='flex flex-col gap-4'>
                            <h1 className='w-fit font-bold text-[1.2rem]'>Summary</h1>
                            <section className='bg-black/5 w-[25rem] flex flex-col gap-8 max-[558px]:gap-4 p-8 rounded-xl h-fit max-[920px]:m-auto max-[920px]:w-[46rem] max-[788px]:w-full max-[558px]:max-w-full'>
                                <div className='flex w-full justify-between'>
                                    <h2 className='text-[1.1rem]'>SUBTOTAL:</h2>
                                    <h2 className='text-[1.1rem]'>$457780.00</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto libero rerum, ad consequuntur labore fuga similique, qui voluptates ex error cupiditate. Minus</p>
                                <div className='cursor-pointer w-full m-auto'>
                                    <Button name='Proceed To Check Out' />
                                </div>
                            </section>
                        </main>
                    </main>
                </section >
            )}
            {cartItems.length < 1 && <section className='w-full height grid place-items-center px-6'>
                <h2 className='w-fit text-[2rem] font-bold text-center'>Shopping Cart is empty</h2>
            </section>}
        </> */}