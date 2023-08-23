import React from 'react'
import Address from '@/asserts/images/Forms/address.png'
import Mail from '@/asserts/images/Forms/mail.png'
import PhoneCall from '@/asserts/images/Forms/phoneCall.png'
import Image from 'next/image'

function Contact() {
    return (
        <section className='mt-12 border-2 border-red-500 mx-[1rem]'>
            <div className='flex justify-center items-center space-x-16 '>

                <div className=''>

                    <form className='flex flex-col justify-center items-center w-[37rem] h-[40rem] border-2 border-red-500 '>
                        <input className='w-[36rem] border-2 border-red-500 h-[3rem] mb-4 px-2 placeholder:text-gray-500' placeholder='Name'></input>

                        <input className='w-[36rem] border-2 border-red-500 h-[3rem] mb-4 px-2 placeholder:text-gray-500' placeholder='Email'></input>

                        <input className='w-[36rem] border-2 border-red-500 h-[11rem] mb-4 px-2 placeholder:text-gray-500' placeholder='Message'></input>
                        <div className='mt-12'>
                            <button className='w-[36rem] border-2 border-red-500 h-[3rem] bg-[#7E74F1] font-bold'>Send Message</button>
                        </div>
                    </form>

                </div>

                <div>
                    <div className='w-[24rem] h-[16rem] border-2 border-red-500'>

                        <div className='flex flex-col'>
                            <div className='flex justify-center items-center space-x-4 space-y-4'>
                                <Image src={Address} className='w-6 h-6' />
                                <div className='flex flex-col'>
                                    <h1>Address</h1>
                                    <p className='text-gray-500'>3424 Layman Avenue, Fayetteville, NC</p>
                                </div>

                            </div>

                            


                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}

export default Contact