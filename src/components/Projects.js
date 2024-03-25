"use client"
import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Project_3 from '@/asserts/images/Projects/Project_1.png'
import Project_2 from '@/asserts/images/Projects/Project_2.png'
import Project_1 from '@/asserts/images/Projects/Project_3.png'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Projects() {


    const Project = ({ img, title, tech, link }) => {

        const router = useRouter();

        const handleLinkClick = () => {
            if (link) {
                window.open(link, '_blank');
            } else {
                router.push('/');
            }
        };

        return (
            <div className='flex flex-col shadow-xl rounded-lg py-1 '>
                <Image src={img} className='md:h-[18rem] md:w-[18rem]' alt='img' />
                <div className='mt-5 px-2  '>
                    <h1 className='text-2xl '>{title}</h1>
                    <div className='flex items-center space-x-3'>
                        <p >{tech}</p>
                        <Link href={link} onClick={handleLinkClick} >
                            <AiOutlineArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className='mt-60 md:mt-12 md:my-12  h-[40rem] md:h-[30rem]  '>
            <div className=' mx-auto flex justify-center my-10'>
                <h1 className='text-2xl md:text-4xl mt-24'>Featured Portfolios</h1>
            </div>
            <div className='flex flex-col md:flex-row md:h-[30rem] justify-center items-center gap-6 py-6'>

                <Project img={Project_1} title={"Tailwind-Boldo "} tech={"Next js "} link={"https://github.com/sunilhn27/tailwind-boldo"} />
                <Project img={Project_2} title={"TailWind RealEstate"} tech={"Next js"} link={"https://github.com/sunilhn27/tailwind-project-1"} />
                <Project img={Project_3} title={"Tailwind Shopping App"} tech={"Next js"} link={"https://github.com/sunilhn27/tailwind-shoppingapp"} />

            </div>
        </section>
    )
}

export default Projects