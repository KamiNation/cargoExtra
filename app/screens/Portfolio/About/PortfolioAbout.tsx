import Image from 'next/image'
import React from 'react'
import {  BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioMap from './PortfolioAboutMap'

const PortfolioAbout = () => {

    const arrowClickHandle = () => {
        location.href = '#portfolio'
    }

    return (
        <section id='about-me' className='w-full min-h-[45vh] mt-16 text-black dark:text-teal-600 relative '>

            <h1 className="text-center font-bold text-primary text-4xl sm:text-base">Welcome to GiddsField</h1>

            <div className="gap-40 flex  items-center justify-center mt-4">

                <div className="justify-center flex-col ">

                    <div className="text-gray-700 text-xl sm:text-xs text-center p-4">
                        <p>
                        GiddsField is the leading international logistics company providing fast and affordable shipping from the 
                        USA to Nigeria without hassle. We also offer Export shipping from Nigeria to Nigeria to the USA. 
                        Whether it’s managing your shipments from door-to-door or simply finding competitive rates for Air Shipping 
                        from any location in the USA to anywhere in Nigeria, we have the experience to help you get there – wherever ‘there’ 
                        may be!
                        </p>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default PortfolioAbout