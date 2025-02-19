"use client"


import { contactUs, experiencemap } from '@/app/utils/global'
import React from 'react'
import AboutContactCard from './ContactCard'


const ContactMap = () => {

    return (
        <>
            <div className='pl-14 pr-14 flex-1 flex  rounded-[2rem] text-center text-black sm:pl-4  sm:pr-4 md:pl-8  md:pr-8'>
                <div className=' flex gap-8 sm:flex-col md:flex-col'>
                    {
                        contactUs.map((project: experiencemap, index) => (
                            <AboutContactCard key={index}
                                desc={project.desc}
                                icon={project.icon}
                                title={project.title}
                            />
                        ))
                    }
                </div>
            </div>
        </>

    )
}

export default ContactMap