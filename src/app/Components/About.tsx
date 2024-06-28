"use client";
import React from 'react'
import Image from 'next/image'
import shield from '/public/Images/shield.png'
import setting from '/public/Images/setting.png'
import perform from '/public/Images/perform.png'
import watch2 from '/public/Images/watch3.png'
import water from '/public/Images/water2.png'
import aboutw from '/public/Images/aboutw.png'
import { MotionDiv } from './MotionDiv';
const variants = {
    hidden: { opacity: 0, y: "4rem" },
    visible: { opacity: 1, y: 0 }
}

const about = () => {
    return (
        <section className='w-full h-fit flex flex-col items-center px-16 max-[500px]:px-12 max-[423px]:px-8 my-[10rem] max-[840px]:my-[5rem] gap-[2.5rem]'>
            <h1 className='min-[1700px]:text-[3.5rem] text-[2.8rem] font-bold max-[840px]:text-[2.5rem] max-[602px]:text-[2rem] text-center max-[340px]:text-[1.5rem]'>What Makes Us Unique</h1>
            <main className='flex w-fit gap-[0rem] max-[1290px]:w-full max-[1290px]:gap-0 max-[1290px]:justify-between max-lg:flex-col max-lg:w-fit max-lg:items-center max-lg:gap-10'>
                <div className='flex flex-col justify-center gap-14'>

                    <MotionDiv className='flex flex-col gap-6 max-lg:gap-4 w-[18rem]  border- border-black max-lg:w-full items-center'>
                        <Image alt='/' className='w-[3rem]' src={setting} />
                        <h2 className='text-[1.4rem] font-semibold max-[840px]:text-[1.2rem]'>High Quality</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vero beatae consequatur quis amet eius! Lorem ipsum dolor sit amet </p>
                    </MotionDiv>

                    <MotionDiv className='flex flex-col gap-6 max-lg:gap-4 w-[18rem]  border- border-black max-lg:w-full items-center'>
                        <Image alt='/' className='w-[3rem]' src={perform} />
                        <h2 className='text-[1.4rem] font-semibold max-[840px]:text-[1.2rem]'>High Performance</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vero beatae consequatur quis amet eius! Lorem ipsum dolor sit amet </p>
                    </MotionDiv>

                </div>

                <MotionDiv className='w-fit flex items-center'>
                    <Image className='w-[30rem] max-[840px]:w-[25rem]' alt='/' src={watch2} />
                </MotionDiv>

                <div className='flex flex-col justify-center gap-14'>
                    <MotionDiv className='flex flex-col gap-6 max-lg:gap-4 w-[18rem]  border- border-black max-lg:w-full items-center'>
                        <Image alt='/' className='w-[3rem]' src={water} />
                        <h2 className='text-[1.4rem] font-semibold max-[840px]:text-[1.2rem]'>Water Resistanct</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vero beatae consequatur quis amet eius! Lorem ipsum dolor sit amet </p>
                    </MotionDiv>
                    <MotionDiv className='flex flex-col gap-6 max-lg:gap-4 w-[18rem]  border- border-black max-lg:w-full items-center'>
                        <Image alt='/' className='w-[3rem]' src={shield} />
                        <h2 className='text-[1.4rem] font-semibold max-[840px]:text-[1.2rem]'>Reliable</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vero beatae consequatur quis amet eius! Lorem ipsum dolor sit amet </p>
                    </MotionDiv>
                </div>
            </main>

        </section>
    )
}

export default about