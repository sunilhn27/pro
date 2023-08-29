import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { BsLinkedin } from 'react-icons/bs'
import Image from 'next/image'
import Pic from '@/asserts/images/Pic1.png'
import Back from '@/asserts/images/back.png'
import Lines from '@/asserts/images/lines.png'

function HeroSection() {
    return (
        <section className='mt-24 '>
            <div className='flex flex-col-reverse  sm:flex-row items-center justify-evenly h-[500px] -scroll-mx-24 '>
                <div className='flex flex-col space-y-4 mt-12 mx-4'>
                <div className='flex flex-col space-y-4 mt-12 mx-4'>
                    <h1 className='text-[#656D72] text-[15px]  w-[190px] h-[24px]'>MY NAME IS</h1>
                    <div className='text-4xl font-semibold'>
                        <p>Sunil <span className='text-[#7E74F1]'>H N.</span></p>
                    </div>
                    <div className='w-[550px] '>
                        <p>Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>
                    </div>
                    <div className='flex space-x-6'>
                        <AiFillGithub className='w-6 h-6' />
                        <AiOutlineInstagram className='w-6 h-6' />
                        <CiTwitter className='w-6 h-6' />
                        <BsLinkedin className='w-6 h-6' />
                    </div>
                </div>
                </div>

                <div className='flex mt-12'>
                    <div className='relative'>
                        <Image src={Back} className='' alt='pics'/>
                        <div className='w-[336px] h-[400px] bg-[#EAE6FE] absolute top-6 left-10'></div>
                        <Image src={Lines} className='absolute top-14 left-48'alt='pics'/>
                        <Image src={Pic} className='absolute top-32 left-10' alt='pics'/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection