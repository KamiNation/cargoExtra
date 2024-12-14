import React from 'react'
import { BiSolidArrowFromTop } from 'react-icons/bi'
import PortfolioProjectMap from './PortfolioProjectMap'

const PortfolioProject = () => {

    const arrowClickHandle = () => {
        location.href = '#experience'
    }


    return (
        <section id='project' className='w-full min-h-screen mt-4 text-black dark:text-teal-600 relative p-2.5'>




            <h1 className="text-center text-4xl font-bold text-primary mb-4 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">Why Choose GiddsField</h1>
            <p className="pl-2 pr-2 text-gray-700 text-justify">GiddsField is a fast-growing company that offers the best customer
                service in the industry. We have access to all major carriers, and we understand how important
                it is for you to get your shipment on time every time. GiddsField’s team of experts will find
                the best way for you to ship your freight internationally at an affordable price.</p>

            <div className="flex flex-wrap  ">

                <div className="gap-10 mb-8    flex sm:flex-col md:flex-col flex-wrap">

                    <PortfolioProjectMap />

                </div>
            </div>
        </section>
    )
}

export default PortfolioProject