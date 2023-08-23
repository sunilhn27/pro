"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Experience() {

    const [selectedCompany, setSelectedCompany] = useState(0)


    const handleSelecetdCompany = (index) => {
        console.log("index " + index)
        setSelectedCompany(index);

    }

    const companies = [


        {
            name: "OneClick LCA Pvt Ltd",
            designation: "QA Consultant",
            year: "Dec 2022 - Present · Full-time",
            place: "Bangalore ,India",
            responsibilities: ["Training and Collaboration", "Recommendations and Strategy Development", "Quality Assessment and Analysis"],

        },
        {
            name: "Nasdaq India Ltd",
            designation: "QA Analyst",
            year: "Mar 2021 - Dec 2022",
            place: "Bangalore ,India",
            responsibilities: ["Test Planning and Execution", "Defect Management", "Quality Assurance Process Improvement"]

        },
        {
            name: "Qualitrix Pvt Ltd",
            designation: "Lead Test Engineer",
            year: "Mar 2020 - Feb 2021",
            place: "Bangalore ,India",
            responsibilities: ["Test Strategy and Planning", "Team Management and Guidance", "Test Process Improvement"],
        },
        {
            name: "AVEVA Pvt Ltd",
            designation: "Software Test Engineer",
            year: "Sep 2018 - Feb 2020",
            place: "Bangalore ,India",
            responsibilities: ["Test Case Design and Execution", "Defect Reporting and Documentation", "Regression Testing"]
        },
    ]



    return (
        <section className='w-full h-[38rem]'>
            <div className='flex flex-col md:flex-row mx-12 '>

                <div className='w-2/6  h-[38rem] flex flex-col justify-center px-4 md:border-r-4 '>
                    <div className='flex flex-col space-y-3'>
                        <p className='md:text-xl uppercase text-gray-500'>career path</p>
                        <h1 className='md:text-4xl '>Work Experices</h1>
                    </div>
                    <div className='mt-12 '>
                        {companies.map((company, index) => {
                            return (<div key={index} onClick={() => handleSelecetdCompany(index)} className='w-[17rem] border-2 border-gray-500 rounded-r-full px-4 py-2 mb-6 hover:bg-black  hover:text-white cursor-pointer '>
                                {company.name}
                            </div>)
                        }
                        )}
                    </div>
                </div>

                <div className=' md:w-2/3  md:h-[38rem] md:p-32 -mt-16 mb-12' >
                    <div>
                        <div className='space-y-2 text-center md:text-start' >
                            <h1 className='text-2xl'>{companies[selectedCompany].designation}</h1>
                            <h2 className='text-lg text-gray-500'>{companies[selectedCompany].place}</h2>
                            <h3 className='text-lg text-gray-500'>{companies[selectedCompany].year}</h3>

                        </div>
                        <div className='mt-12 '>

                            <div className='md:text-[1.3rem] space-y-2'>
                                {companies[selectedCompany].responsibilities.map((res, index) => {
                                    return (<li key={index}>{res}</li>)
                                })}

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}

export default Experience