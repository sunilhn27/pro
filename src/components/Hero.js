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
        <section className='flex flex-col-reverse sm:flex-row justify-evenly md:mx-32 mx-10 mt-32 '>

            <div className='flex flex-col my-auto space-y-4 md:w-1/2'>
                <h1>MY NAME IS</h1>
                <div className='text-4xl md:text-5xl font-semibold'>
                    <p>Sunil <span className='text-[#7E74F1]'>H N.</span></p>
                </div>
                <p className='w-[95%] md:w-[510px] lg:text-lg'>Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>
                <div className='flex space-x-6'>
                    <AiFillGithub className='w-6 h-6' />
                    <AiOutlineInstagram className='w-6 h-6' />
                    <CiTwitter className='w-6 h-6' />
                    <BsLinkedin className='w-6 h-6' />
                </div>
            </div>


            <div className=' mb-12 flex justify-center'>
                <Image src={Pic} className='' />

            </div>

        </section>
    )
}

export default Hero