import Image from 'next/image'
import React from 'react'
import PortfolioContact from '../Contact/PortfolioContact'

const PortfolioProject = () => {

    const arrowClickHandle = () => {
        location.href = '#experience'
    }


    return (



        <section id="project" className="relative h-full w-full  flex flex-col">


            <div className="relative w-full h-screen flex justify-center items-center">
                {/* Split Container (Using Flex) */}
                <div className="w-full h-full flex flex-col">
                    {/* Left Half (On Top of Right Half) */}
                    <div className="w-full h-full bg-[#ffffff] z-10"></div>

                    {/* Right Half (Behind Left Half) */}
                    <div className="w-full h-full bg-[#102136] z-0">
                    </div>
                </div>

                {/* Center Overlay */}
                <div className='absolute z-20'>
                    <div className="absolute  p-4 border border-solid border-black rounded-2xl w-full h-full  bg-[url('/contactUs.jpg')] bg-cover flex justify-center items-center text-white flex-col gap-4">
                        <div className='text-4xl font-bold'>
                            Do you have any Question?
                        </div>
                        <div className='font-bold'>
                            Feel free to contact us anytime.
                        </div>

                        <div className='border border-purple-800 rounded-xl p-4 bg-purple-600'>
                            Contact Us
                        </div>
                    </div>
                    <PortfolioContact />
                </div>

            </div>
        </section>


    )
}

export default PortfolioProject
