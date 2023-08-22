import Link from 'next/link'
import React from 'react'

function Experience() {


    const companies = [


        {
            name: "Nasdaq"
        },
        {
            name: "AVEVA"
        },
        {
            name: "OneClick LCA"
        },
        {
            name: "Qualitrix"
        },
    ]



    return (
        <section className='w-full h-[38rem] border-2 border-red-500'>
            <div className='flex mx-12 '>

                <div className='w-2/6 border-2 border-red-400 h-[38rem] flex flex-col justify-center px-4'>
                    <div className='flex flex-col space-y-3'>
                        <p className='text-xl uppercase text-gray-500'>career path</p>
                        <h1 className='text-4xl font-bold'>Work Experices</h1>
                    </div>
                    <div className='mt-12 '>
                        {companies.map((company, index) => {
                            return (<div key={index} className='w-[17rem] border-2 border-gray-500 rounded-r-full px-4 py-2 mb-6 hover:bg-blue-600  hover:text-white'>
                                <Link className='' href={""}>{company.name}</Link>
                            </div>)
                        }
                        )}
                    </div>
                </div>
                <div className='w-2/3 border-2 border-red-400 h-[38rem]' >

                </div>

            </div>
        </section>
    )
}

export default Experience