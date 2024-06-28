import Image from 'next/image'
import React from 'react'
import showcase1 from '/public/Images/showcase1.png'
import showcase2 from '/public/Images/showcase2.jpg'
import showcase3 from '/public/Images/showcase34.jpg'
import showcase4 from '/public/Images/showcase4.png'

const Showcase = () => {
    return (
        <section className='grid place-items-center mb-[10rem] max-[840px]:mb-[5rem]'>
            <div  className='grid grid-cols-[3fr,1fr] h-fit max-lg:grid-cols-1 w-full gap-6 max-lg:gap-2 justify-between'>
                <main className='grid grid-cols-[2fr,1fr] max-lg:grid-cols-[1fr,1fr] gap-6 max-lg:gap-2'>
                    <Image className='w-screen h-[38rem] min-[1850px]:h-[42rem] max-lg:h-[28rem] object-cover' alt='/' src={showcase1} />
                    <Image className='w-screen h-[38rem] min-[1850px]:h-[42rem] max-lg:h-[28rem] object-cover' alt='/' src={showcase3} />
                </main>
                <main className='grid grid-rows-[1fr,1fr] max-lg:grid-rows-1 max-lg:grid-cols-[1fr,1fr] gap-6 max-lg:gap-2'>
                    <Image className='w-screen h-[18.2rem] min-[1850px]:h-[20.2rem] object-cover' alt='/' src={showcase2} />
                    <Image className='w-screen h-[18.2rem] min-[1850px]:h-[20.2rem] object-cover' alt='/' src={showcase4} />
                </main>
            </div>
        </section >
    )
}

export default Showcase