import React from 'react'
import { BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioExperienceMap from './PortfolioExperienceMap'
import Image from 'next/image'
import image from "@/public/howitworks.jpg"


const PortfolioExperience = () => {



    return (
        <section id='experience' className='w-full min-h-screen mt-4 text-black  relative p-2.5'>
            <div className="flex flex-wrap flex-row gap-10 justify-around mt-4" >
                <Image src={image} alt="Project 1" width={150} height={150} className="rounded-[2rem] w-[90%] h-[90%] " />
            </div>
            
            <div className="flex">
                <div className='gap-10 mb-8 mt-8 flex sm:flex-col md:flex-col lg:flex-col'>
                    <PortfolioExperienceMap />
                </div>
            </div>
        </section>
    )
}

export default PortfolioExperience