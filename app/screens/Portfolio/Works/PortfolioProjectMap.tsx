import { experiencemap, portfolioWorkMap } from '@/app/utils/global'
import React from 'react'

import PortfolioExperienceCard from '../Experience/PortfolioExperienceCard'

const PortfolioProjectMap = () => {
    return (
        <>
            <div className='flex-1  rounded-[2rem] text-center  text-primary '>
                <div className='flex flex-col justify-around p-4 gap-14 sm:gap-4 '>
                    {
                        portfolioWorkMap.map((project: experiencemap, index) => (
                            <PortfolioExperienceCard key={index}
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

export default PortfolioProjectMap