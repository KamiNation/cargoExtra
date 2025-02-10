import { experiencemap } from '@/app/utils/global'
import Image from 'next/image'
import React from 'react'





const PortfolioExperienceCard: React.FC<experiencemap> = ({ desc, title }) => {
    return (
        <article className='flex p-4 bg-[#f3f5f9] hover:bg-white rounded-xl border border-solid hover:shadow-xl transition-shadow '>

            <div className='w-[2px] h-[2px] p-8 bg-[#e5def7] border border-solid rounded-full '>
            </div>

            <div className='flex flex-col gap-4 pl-4'>
                <h3 className='text-black flex font-bold text-base sm:text-sm md:text-base lg:text-lg xl:text-xl'>{title}</h3>
                <p className='text-gray-700 flex text-justify xl:text-center tracking-widest'>{desc}</p>
            </div>
        </article>
    )
}

export default PortfolioExperienceCard