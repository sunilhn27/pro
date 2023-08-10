"use client"
import React from 'react'
import Logo from '@/asserts/images/logo.png'
import LogoWhite from '@/asserts/images/logoWhite.png'
import Link from 'next/link'
import Image from 'next/image'
import Moon from '@/asserts/images/moon.png'
import { useTheme } from 'next-themes'
import { BsSun, BsFillMoonFill } from 'react-icons/bs'


function NavBar() {

    const { theme, setTheme } = useTheme()

    return (
        <section className='mt-10 font-sans'>
            <div className='md:w-[90%] xl:w-[95%]  flex justify-between mx-auto px-36 '>
                {theme === "light" ? (<Image src={Logo} alt='Logo' className='text-white' />) : (<Image src={LogoWhite} alt='Logo' className='text-white' />)}

                <nav className='hidden md:flex space-x-12 items-center '>
                    <Link href={""}>Services</Link>
                    <Link href={""}>Portfolios</Link>
                    <Link href={""}>Experience</Link>
                    <Link href={""}>Blog</Link>
                    <Link href={""}>....</Link>

                    <div className='flex items-center'>
                        <div className='flex items-center space-x-8 '>
                            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                                {theme === 'light' ? (
                                    <BsFillMoonFill className='w-6 h-6' />
                                ) : (
                                    <BsSun className='w-6 h-6' />
                                )}
                            </button>
                            <button className='bg-gray-500 text-white rounded-md px-4 py-2' >Resume</button>
                        </div>

                    </div>

                </nav>
            </div>

        </section>
    )
}

export default NavBar

