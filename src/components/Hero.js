import Image from 'next/image';
import React from 'react';
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { CiTwitter } from 'react-icons/ci';
import { BsLinkedin } from 'react-icons/bs';
import Pic from '@/asserts/images/Pic1.png';
import Back from '@/asserts/images/back.png';
import Lines from '@/asserts/images/lines.png';

function Hero() {
    return (
        <section className='flex flex-col-reverse sm:flex-row justify-evenly md:mx-32 mx-10 mt-32 '>
            {/* Content Section */}
            <div className='flex flex-col my-auto space-y-4 md:w-1/2'>
                <h1>MY NAME IS</h1>
                <div className='text-4xl md:text-5xl font-semibold'>
                    <p>Sunil <span className='text-[#7E74F1]'>H N.</span></p>
                </div>
                <p className='w-full md:max-w-md lg:text-lg text-gray-500 '>Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Next js, and React. Passionate about UI/UX</p>
                <div className='flex space-x-6 '>
                    <AiFillGithub className='w-6 h-6' />
                    <AiOutlineInstagram className='w-6 h-6' />
                    <CiTwitter className='w-6 h-6' />
                    <BsLinkedin className='w-6 h-6' />
                </div>
            </div>

            {/* Image Section */}
            <div className='mb-12 flex justify-center w-full md:w-1/2'>
                <div className='relative w-[80%] h-[23rem] md:w-[70%] md:h-[39rem] 2xl:h-[30rem] 2xl:w-[20rem]'>
                    <Image src={Pic} className='absolute top-32 left-10 md:w-[5rem] md:h-[5rem]' alt='dummy' layout="fill" objectFit="cover" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
