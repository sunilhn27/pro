import Image from 'next/image'
import React from 'react'
import App from '@/asserts/images/services/app.png'
import Crown from '@/asserts/images/services/crown.png'
import Globe from '@/asserts/images/services/globe.png'

function Services() {


    const Service = ({ img, title, para }) => {
        return (
            <div className='w-[360px] h-[290px] shadow-lg dark:border-2 rounded-lg'>
                <div className='flex flex-col  items-center py-16 space-y-3'>
                    <Image src={img} alt='ux' />
                    <h1>{title}</h1>
                    <p className='w-[250px] text-center'>{para}</p>
                </div>
            </div>)
    }

    const appData = "Turn what you have in mind of a digital product into reality. For any platform you consider."


    const appDev = "Standard designing, building, and implementing your applications with documentation."


    const webDev = "Create and maintain your websites and also take care of its performance and traffic capacity."

    return (
        <section className='mt-48 md:mt-32 h-[670px] w-full '>
            <div className='flex flex-col items-center space-y-2 mb-12'>
                <p className='text-gray-500'>SERVICES</p>
                <h1 className='text-4xl font-semibold'>Specialized in</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid gap-8 sm:grid-cols-3'>
                    <Service img={App} title={"UI/UX Design"} para={appData} />
                    <Service img={Crown} title={"Application Development"} para={appDev} />
                    <Service img={Globe} title={"Web Development"} para={webDev} />

                </div>
            </div>
        </section>
    )
}

export default Services