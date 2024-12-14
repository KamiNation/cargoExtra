import { experiencemap } from '@/app/utils/global'
import Image from 'next/image'
import React from 'react'





const PortfolioExperienceCard: React.FC<experiencemap> = ({ icon, desc, title }) => {
    return (
        <article className='  '>
            <div className='flex  items-center justify-evenly'>
                {/* {icon} */}
                <h3 className='text-primary font-bold text-2xl sm:text-sm md:text-base lg:text-lg xl:text-xl'>{title}</h3>
            </div>
            <p className='text-gray-700 p-2 text-justify xl:text-center '>{desc}</p>
        </article>
    )
}

export default PortfolioExperienceCard