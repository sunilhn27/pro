import React from 'react'
import Logo from '@/asserts/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import Moon from '@/asserts/images/moon.png'


function NavBar() {
    return (
        <section className='mt-10 font-sans'>
            <div className='md:w-[90%] xl:w-[95%]  flex justify-between mx-auto px-36'>
                <Image src={Logo} alt='Logo' />
                <nav className='flex space-x-12 items-center'>
                    <Link href={""}>Services</Link>
                    <Link href={""}>Portfolios</Link>
                    <Link href={""}>Experience</Link>
                    <Link href={""}>Blog</Link>
                    <Link href={""}>....</Link>
                </nav>
                <div className='flex items-center'>
                    <div className='flex items-center space-x-8 '>
                        <button>
                            <Image src={Moon} alt='moon' className='w-[24px] h-[24px]' />
                        </button>
                        <button className='bg-gray-500 text-white rounded-md px-4 py-2' >Resume</button>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default NavBar

