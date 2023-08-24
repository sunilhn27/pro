import Image from 'next/image'
import React from 'react'
import App from '@/asserts/images/services/app.png'
import Crown from '@/asserts/images/services/crown.png'
import Globe from '@/asserts/images/services/globe.png'

function Services() {


    const Card = ({ img, title, desc }) => {
        return (
            <>
                <div className='w-[22rem] h-[14rem] md:w-[28rem] md:h-[22rem] hover:shadow-2xl  border-gray-500 border-2 py-8 flex mx-6 rounded-xl mb-6'>
                    <div className='flex flex-col justify-center items-center space-y-3'>
                        <Image src={img} className='w-10 h-10' alt='App' />
                        <h1 className='md:text-2xl'>{title}</h1>
                        <p className='px-[1rem] md:px-[2rem] text-center md:text-lg text-gray-500'>{desc}</p>
                    </div>
                </div>
            </>
        )
    }

    return (
        <section id="services" className='mt-12 md:my-24'>
            <div className='flex mx-auto justify-center mb-12'>
                <div className='flex flex-col space-y-3'>
                    <h3 className='text-gray-500 uppercase'>-Services</h3>
                    <h1 className='text-4xl'>Specialized in</h1>
                </div>
            </div>
            <div className=' flex flex-col  md:flex-row items-center justify-center md:space-x-6 px-6'>
                <Card img={App} title={"UI/UX Design"} desc={"Turn what you have in mind of a digital product into reality. For any platform you consider."} />
                <Card img={Crown} title={"Application Development"} desc={"Standard designing, building, and implementing your applications with documentation."} />
                <Card img={Globe} title={"Web Development"} desc={"Create and maintain your websites and also take care of its performance and traffic capacity."} />
            </div>
        </section>
    )
}

export default Services