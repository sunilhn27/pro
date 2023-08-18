import Image from 'next/image'
import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { BsLinkedin } from 'react-icons/bs'
import Pic from '@/asserts/images/pic.png'
import Back from '@/asserts/images/back.png'
import Lines from '@/asserts/images/lines.png'

function Hero() {
    return (
        <section className='w-[1270px] h-[496px]  my-12 border-2 border-red-500'>

            <div className='flex flex-col-reverse sm:flex-row justify-evenly '>
                <div className='flex flex-col space-y-4 mt-32 mx-4 '>
                    <h3 className='px-6'>MY NAME IS</h3>
                    <h1 className='text-5xl'>Alex <span className='text-[#7E74F1] font-semibold'>Smith.</span></h1>
                    <p className='w-[400px] sm:w-[538px] h-[96px] text-gray-500'>Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>
                    <div className='flex space-x-6'>
                        <AiFillGithub className='w-6 h-6' />
                        <AiOutlineInstagram className='w-6 h-6' />
                        <CiTwitter className='w-6 h-6' />
                        <BsLinkedin className='w-6 h-6' />
                    </div>
                </div>

                <div className='flex mt-12 relative items-center jus'>
                    <div className=''>


                        <Image src={Pic} className=' top-32 left-10' />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero