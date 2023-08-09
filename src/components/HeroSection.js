import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { BsLinkedin } from 'react-icons/bs'
import Image from 'next/image'
import Pic from '@/asserts/images/pic.png'
import Back from '@/asserts/images/back.png'
import Lines from '@/asserts/images/lines.png'

function HeroSection() {
    return (
        <section className='mt-12 '>
            <div className='flex items-center justify-evenly h-[500px]   -scroll-mx-24'>
                <div className='flex flex-col space-y-4  '>
                    <h1 className='text-[#656D72] text-[15px]   w-[190px] h-[24px]'>MY NAME IS</h1>
                    <div className='text-4xl font-semibold'>
                        <p>Alex <span className='text-[#7E74F1]'>Smith.</span></p>
                    </div>
                    <div className='w-[550px] text-[#232E35]'>
                        <p>Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>
                    </div>
                    <div className='flex space-x-6'>
                        <AiFillGithub className='w-6 h-6' />
                        <AiOutlineInstagram className='w-6 h-6' />
                        <CiTwitter className='w-6 h-6' />
                        <BsLinkedin className='w-6 h-6' />
                    </div>
                </div>

                <div className='flexpl-24'>
                    <div className='relative'>
                        <Image src={Back} className='' />
                        <div className='w-[336px] h-[400px] bg-[#EAE6FE] absolute top-6 left-10'></div>
                        <Image src={Lines} className='absolute top-14 left-48'/>
                        <Image src={Pic} className='absolute top-32 left-10' />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection