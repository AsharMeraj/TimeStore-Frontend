import React from 'react'
import Image from 'next/image'
import watch from '/public/Images/watchbg.png'
import Button from './Button/Button'
import { MotionDiv, MotionH1, MotionP, MotionSpan } from './MotionDiv'
import Link from 'next/link'

const variants = {
  hidden: { opacity: 0, x: "-4rem" },
  visible: { opacity: 1, x: 0 }
}

const HomePage = () => {
  return (
    <section className='w-full min-[1700px]:h-[60rem] max-[840px]:h-[40rem] max-[602px]:h-[32rem] h-[55rem] bg-black/[0.06] items-center flex justify-center px-6 overflow-hidden'>
      <main className='flex gap-2 w-[65rem] max-[1700px]:w-[55rem] max-[1005px]:w-full max-[561px]:gap-4 justify-between h-fit items-center'>
        <div className='flex flex-col gap-8 w-[40rem]  justify-center'>
          <MotionH1
            className='min-[1700px]:text-[4.5rem] text-[4rem] font-bold max-[840px]:text-[3rem] max-[602px]:text-[2rem]'
            variants={variants}
            viewport={{once: true}}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.5,
            }}
          >
            Select Your New Perfect Style
          </MotionH1>

          <MotionP
            className='text-[1.2rem] mr-8 max-[561px]:mr-0 max-[561px]:text-[1rem] text-black/80'
            variants={variants}
            viewport={{once: true}}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt nulla aliquid,  Mollitia.
          </MotionP>
          <MotionDiv
            className='w-fit'
            variants={variants}
            viewport={{once: true}}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.5,
              delay: 0.6
            }}
          >
            <Link href={'/AllProducts'}>
              <Button name='SHOP NOW' />
            </Link>
          </MotionDiv>
        </div>
        <MotionSpan
          className='rounded-br-[45%] rounded-bl-[56%]  ml-6 max-[561px]:ml-4  imgbefore min-[1700px]:w-[24rem] min-[1700px]:h-[60rem] w-[22rem] h-[55rem] max-[840px]:h-[40rem] max-[602px]:h-[32rem] max-[500px]:hidden'
          variants={variants}
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: [1, 1.1, 1] }}
          viewport={{once: true}}
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }}
        >
          <Image alt='/' className=' h-full w-full rounded-br-[45%] rounded-bl-[56%]' priority={true} src={watch} />
        </MotionSpan>
      </main>

    </section>
  )
}

export default HomePage