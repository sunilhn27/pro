"use client"
import React, { useEffect, useState } from 'react'
import Address from '@/asserts/images/Forms/address.png'
import Mail from '@/asserts/images/Forms/mail.png'
import PhoneCall from '@/asserts/images/Forms/phoneCall.png'
import Image from 'next/image'

function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [disableSendBtn, setDisableSendBtn] = useState(false)

    useEffect(() => {
        setDisableSendBtn(name !== '' && email !== '' && message !== '');
    }, [name, email, message])


    const sendEmail = async () => {
        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                const data = await response.json();
                setEmailStatus(data.message);
                console.log("Set email status True")
            } else {
                setEmailStatus('Failed to send email');
                console.log("Set email status message")
            }
        } catch (error) {
            setEmailStatus('Error: ' + error.message);
        }
    };



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
                        <input className='w-[18rem] md:w-[36rem]  h-[3rem] mb-4 px-2 placeholder:text-gray-500 rounded-lg border-2 border-gray-400' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>

                        <input className='w-[18rem] md:w-[36rem]  h-[3rem] mb-4 px-2 placeholder:text-gray-500 rounded-lg border-2 border-gray-400' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

                        <input className='w-[18rem] md:w-[36rem]  h-[11rem] mb-4 px-2 placeholder:text-gray-500 rounded-lg border-2 border-gray-400' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></input>

                        <div className='mt-12' onClick={sendEmail} >
                            <button disabled={!disableSendBtn} className={`w-[18rem] md:w-[36rem]  h-[3rem] bg-[#7E74F1] font-bold rounded-lg  ${disableSendBtn ? "" : "opacity-50 cursor-not-allowed"}`}>Send Message</button>
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