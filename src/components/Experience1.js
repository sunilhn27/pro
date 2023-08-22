"use client"
import React, { useState } from 'react';

const Experience = () => {

    
    const companies = [
        {
            name: 'Company A',
            roles: ['Role A1', 'Role A2'],
            responsibilities: ['Responsibility A1', 'Responsibility A2']
        },
        {
            name: 'Company B',
            roles: ['Role B1', 'Role B2'],
            responsibilities: ['Responsibility B1', 'Responsibility B2']
        },
        {
            name: 'Company C',
            roles: ['Role B1', 'Role B2'],
            responsibilities: ['Responsibility B1', 'Responsibility B2']
        },
        // Add more companies here...
    ];

    const [selectedCompany, setSelectedCompany] = useState(0);

    const handleCompanyClick = (index) => {
        setSelectedCompany(index);
    };

    return (
        <section className='mt-12'>
            <div className='flex'>
                <div className='w-1/4'>
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            onClick={() => handleCompanyClick(index)}
                            className={`cursor-pointer p-2 ${selectedCompany === index ? 'bg-gray-300' : ''
                                }`}
                        >
                            {company.name}
                        </div>
                    ))}
                </div>
                <div className='w-3/4'>
                    <h2>{companies[selectedCompany].name}</h2>
                    <ul>
                        {companies[selectedCompany].roles.map((role, index) => (
                            <li key={index}>{role}</li>
                        ))}
                    </ul>
                    <ul>
                        {companies[selectedCompany].responsibilities.map(
                            (responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
