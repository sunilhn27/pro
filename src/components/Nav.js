"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from '@/asserts/images/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'
import { useTheme } from "next-themes";
import LogoWhite from '@/asserts/images/logoWhite.png'

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { theme, setTheme } = useTheme();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <section className="mt-12 px-4 ">
            <nav className="flex items-center justify-between md:justify-evenly">
                {theme === "light" ? (<Image src={Logo} alt='Logo' className='text-white' />) : (<Image src={LogoWhite} alt='Logo' className='text-white' />)}

                <div className="hidden md:flex space-x-10 ">
                    <Link href={"/"}>Services</Link>
                    <Link href={"/"}>Portfolios</Link>
                    <Link href={"/"}>Experience</Link>
                    <Link href={"/"}>Blog</Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === 'light' ? (
                            <BsFillMoonFill className='w-6 h-6' />
                        ) : (
                            <BsSun className='w-6 h-6' />
                        )}
                    </button>
                    <button className="border-2 border-gray-400 px-4 py-2 rounded-md">Resume</button>
                </div>
                <div className="md:hidden flex space-x-4">
                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === 'light' ? (
                            <BsFillMoonFill className='w-6 h-6' />
                        ) : (
                            <BsSun className='w-6 h-6' />
                        )}
                    </button>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <AiOutlineClose className="h-8 w-8" /> : <RxHamburgerMenu className="h-8 w-8" />}
                    </button>
                    <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                        <Link className="block py-2" href={"/"}>Services</Link>
                        <Link className="block py-2" href={"/"}>Portfolios</Link>
                        <Link className="block py-2" href={"/"}>Experience</Link>
                        <Link className="block py-2" href={"/"}>Blog</Link>

                    </div>


                </div>

            </nav>



        </section >
    )

}

export default NavBar;
