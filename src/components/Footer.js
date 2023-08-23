import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
import { BsLinkedin } from 'react-icons/bs'
function Footer() {
  return (
    <section className='mt-64 md:my-12 '>
      <div className='flex justify-center items-center'>
        <div className='space-y-6 text-gray-500'>
          <div className='flex space-x-6 hover:text-blue-500'>
            <AiFillGithub className='w-6 h-6' />
            <AiOutlineInstagram className='w-6 h-6' />
            <CiTwitter className='w-6 h-6' />
            <BsLinkedin className='w-6 h-6' />
          </div>
          <h1>© 2023  -  DevChapter</h1>
        </div>
      </div>
    </section>
  )
}

export default Footer