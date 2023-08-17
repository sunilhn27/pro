"use client"
import React from 'react'
import Logo from '@/asserts/images/logo.png'
import LogoWhite from '@/asserts/images/logoWhite.png'
import Link from 'next/link'
import Image from 'next/image'
import second from '@/asserts/images/moon.png'
import { BsSun, BsFillMoonFill } from 'react-icons/bs'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'


function NavBar() {
    return (
        <section className='mt-10 '>
            <nav className='justify-between  mx-[10%] flex items-center px-1'>
                <Image src={Logo} />
                <div className='space-x-7'>
                    <Link href={"/"}>Services</Link>
                    <Link href={"/"}>Portfolios</Link>
                    <Link href={"/"}>Experience</Link>
                    <Link href={"/"}>Blog</Link>
                </div>
                <div className='flex space-x-6 items-center'>
                    <RxHamburgerMenu className='w-6 h-6'/>
                    <button className='bg-gray-500 rounded-md px-4 py-2'>Resume</button>
                </div>
            </nav>

        </section>
    )
}

export default NavBar

