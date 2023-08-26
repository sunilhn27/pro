import React from 'react'
import Address from '@/asserts/images/Forms/address.png'
import Mail from '@/asserts/images/Forms/mail.png'
import PhoneCall from '@/asserts/images/Forms/phoneCall.png'
import Image from 'next/image'

function Contact() {

    const Info = ({ img, title, para }) => {
        return (
            <div className='py-4'>
                <div className='flex items-center space-x-3'>
                    <Image src={img} className='w-6 h-6' />
                    <div className='flex flex-col '>
                        <h1>{title}</h1>
                        <p className='text-gray-500'>{para}</p>
                    </div>
                </div>
            </div>)
    }

    return (
        <section className='mt-60 md:mt-12  mx-[1rem]'>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center space-x-16 '>

                <div className=''>

                    <form className='flex flex-col justify-center items-center w-[37rem] h-[40rem]  '>
                        <input className='w-[18rem] md:w-[36rem]  h-[3rem] mb-4 px-2 placeholder:text-gray-500 rounded-lg border-2 border-gray-400' placeholder='Name'></input>

                        <input className='w-[18rem] md:w-[36rem]  h-[3rem] mb-4 px-2 placeholder:text-gray-500 rounded-lg border-2 border-gray-400' placeholder='Email'></input>

                        <input className='w-[18rem] md:w-[36rem]  h-[11rem] mb-4 px-2 placeholder:text-gray-500 rounded-lg border-2 border-gray-400' placeholder='Message'></input>
                        <div className='mt-12'>
                            <button className='w-[18rem] md:w-[36rem]  h-[3rem] bg-[#7E74F1] font-bold rounded-lg'>Send Message</button>
                        </div>
                    </form>

                </div>

                <div>
                    <div className='-mb-16 md:mb-16 w-[24rem] h-[16rem] '>

                        <div className='flex flex-col'>
                            <Info img={Address} title={"Address"} para={"karnataka, Bangalore, India - 562123"} />

                            <Info img={PhoneCall} title={"Phone"} para={"+91 7411161882"} />

                            <Info img={Mail} title={"E-Mail"} para={"sunilh.n27@gmail.com"} />


                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}

export default Contact