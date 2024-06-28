import React from 'react'
import Link from 'next/link'
import facebook from '/public/Images/facebook.png'
import instagram from '/public/Images/instagram.png'
import twitter from '/public/Images/twitter.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className=" px-6 grid place-items-center min-[1400px]:px-[7.5rem] mt-[12rem] mb-[6rem] text-black ">
      {/* LEFT START */}
      <div className="flex flex-col w-full md:items-center gap-12 max-[350px]:gap-6">
        {/* LOGO MENU START */}
        <main className='flex w-full gap-8 max-[350px]:gap-6 justify-between flex-row max-[975px]:flex-col'>
          <main className='max-w-[25rem] flex flex-col gap-4'>
            <h1>
              <span className='text-black text-[1.7rem] font-semibold'>Time</span>
              <span className=' text-[--Primary-Color] text-[1.7rem] font-semibold'>Store</span>
            </h1>
            <p className='text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui id animi officia temporibus eos beatae eaque earum consequatur reiciendis vero sint doloribus ipsam commodi</p>
          </main>

          <main className='flex gap-12 max-[350px]:gap-4'>
            {/* LOGO MENU END */}
            {/* MENU START */}
            <div className="flex flex-col gap-3 max-[350px]:gap-2">
              <div className="font-medium uppercase text-[1.2rem] cursor-pointer">
                Find a store
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Become A Partner
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Sign Up For Email
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Send Us Feedback
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Student Discount
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3 max-[350px]:gap-2">
              <div className=" font-medium uppercase text-[1.2rem]">
                About nike
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                News
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Careers
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Investors
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Sustainability
              </div>
            </div>

            {/* NORMAL MENU START */}
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3 max-[350px]:gap-2">
              <div className="font-oswald font-medium uppercase text-[1.2rem]">
                get help
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Order Status
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Delivery
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm hover:text-[--Primary-Color] text-black/70 relative hover:left-1 cursor-pointer">
                Contact Us
              </div>
            </div>
            {/* MENU END */}
            {/* NORMAL MENU END */}
          </main>
        </main>
        {/* LEFT END */}
        <main className='flex justify-between w-full max-[975px]:flex-col gap-8 max-[350px]:gap-6'>
          <h2 className='text-[1.2rem] text-black/50'>Copyright ©2024 All rights reserved | This template is made by Ashar Meraj</h2>
          <div className='flex gap-6'>
            <Image alt='' className='w-[2rem]' src={facebook} />
            <Image alt='' className='w-[2rem]' src={instagram} />
            <Image alt='' className='w-[2rem]' src={twitter} />
          </div>
        </main>
      </div>
    </footer>
  )
}

export default Footer