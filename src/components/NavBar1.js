"use client"
import React from 'react'
import Logo from '@/asserts/images/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { BsSun, BsFillMoonFill } from 'react-icons/bs'

function NavBar1() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className='mt-10'>
            <nav className='justify-between mx-[10%] flex items-center px-1'>
                <Image src={Logo} alt='Logo' />
                <div className={`space-x-7 ${isMenuOpen ? 'hidden' : 'flex'}`}>
                    <Link href={"/"}>Services</Link>
                    <Link href={"/"}>Portfolios</Link>
                    <Link href={"/"}>Experience</Link>
                    <Link href={"/"}>Blog1</Link>
                </div>
                <div className='flex space-x-6 items-center'>
                    <BsFillMoonFill className='w-6 h-6' />
                    <button className='bg-gray-500 rounded-md px-4 py-2'>Resume</button>
                </div>
                <div
                    className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
                    onClick={toggleMenu}
                >
                    {/* Hamburger icon */}
                    <div className='block w-6 h-1 bg-black'></div>
                    <div className='block w-6 h-1 bg-gray-500 mt-1'></div>
                    <div className='block w-6 h-1 bg-gray-500 mt-1'></div>
                </div>
            </nav>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className='lg:hidden'>
                    <Link href={"/"}>Services</Link>
                    <Link href={"/"}>Portfolios</Link>
                    <Link href={"/"}>Experience</Link>
                    <Link href={"/"}>Blog1</Link>
                </div>
            )}
        </section>
    )
}

export default NavBar1