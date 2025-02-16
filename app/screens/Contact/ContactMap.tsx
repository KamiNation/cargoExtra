import { contactUs, experiencemap } from '@/app/utils/global'
import React from 'react'
import AboutContactCard from './ContactCard'


const ContactMap = () => {

    return (
        <>
            <div className='p-14 flex-1 flex  rounded-[2rem] text-center text-black dark:text-teal-600 '>
                <div className=' flex gap-8'>
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