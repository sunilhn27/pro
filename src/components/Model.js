import React, { useState } from 'react'

function Model({ closeModel}) {

    return (
        <div className='fixed inset-0 bg-black text-white bg-opacity-20 backdrop-blur-sm flex justify-center items-center '>

            <div className='w-[430px] 4-[250px] bg-white text-black rounded-lg shadow-xl'>
                <div className='px-6 py-6 space-y-3'>
                    <div className='flex justify-between'>
                        <h1 className='text-3xl'>Are you Sure?</h1>
                        <button onClick={closeModel}  className='text-2xl font-bold'>X</button>
                    </div>

                    <p className='text-gray-500'>Do you really want to delete this Record</p>
                    <div className='flex space-x-3'>
                        <button onClick={closeModel} className='border-2 border-gray-500 px-4 py-2 rounded-lg '>Cancel</button>
                        <button onClick={closeModel} className='border-2 border-gray-500 px-4 py-2 rounded-lg bg-red-600 text-white'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model