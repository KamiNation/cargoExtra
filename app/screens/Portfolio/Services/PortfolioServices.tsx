import Image from 'next/image'
import React from 'react'

import air from "@/public/airfreight.jpeg"
import shop from "@/public/shop-4-me.jpg"
import { FaShopLock } from 'react-icons/fa6'

const PortfolioServices = () => {
    return (
        <section id='services' className='w-full min-h-screen mt-4 text-black dark:text-teal-600 relative p-2.5'>

            <h1 className="text-center text-primary font-bold text-4xl mb-4 sm:text-base md:text-lg lg:text-xl xl:text-2xl">Our Services</h1>

            <div className="flex flex-wrap mb-32">
                {/* <div className="gap-10 mb-8 mt-8 flex sm:flex-col md:flex-col flex-wrap"> */}
                <div className="flex-col gap-4 ">

                    <div className=" grid grid-cols-2 grid-rows-1 sm:flex sm:flex-col md:flex md:flex-col" >

                        {/* <div className='flex flex-wrap flex-row gap-10 justify-around mt-4'> */}
                        <div className='flex flex-1 '>
                            <Image alt='services' width={150} height={150} src={air} className=" w-[100%] h-[100%]" />
                        </div>

                        <div className='flex flex-col flex-1 justify-center p-12 gap-14 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2'>

                            <span className='text-primary font-bold  text-4xl sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
                                Air Freight
                            </span>

                            <p className='text-justify text-gray-700'>
                                Being experts in all forms of product shipment either by air or by sea, We ship cars, heavy automobile equipment, and bulky items efficiently and hassle-free. We have amassed over 4 years of experience in the field of goods and services transportation around the world and in Nigeria.
                            </p>
                        </div>

                    </div>

                    <div className='grid grid-cols-2 grid-rows-1 sm:flex sm:flex-col md:flex md:flex-col'>
                        <div className='flex flex-col flex-1 p-12 gap-14 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2'>
                            <span className='text-primary font-bold  text-4xl sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
                                Shop For Me
                            </span>

                            <p className='text-justify text-gray-700'>
                                We understand the difficulties people are facing in buying goods online from the US. That's why we are here to help you. You tell us what you want, we will shop for you and receive your order at our US warehouse. You pay for shipping and we will ship your goods to you in Nigeria.
                            </p>
                        </div>

                        <div className='flex flex-1 '>
                            <Image alt='services' width={200} height={200} src={shop} className=" w-[100%] h-[100%]" />
                        </div>
                    </div>

                </div>

            </div>

            <div>

                <div className='mb-8'>
                    <div className='text-primary font-bold mb-2 text-xl sm:text-base sm:text-center sm:p-2 md:text-lg md:text-center lg:text-xl lg:text-center xl:text-2xl xl:text-center '>
                        Get Your Cargo Shipped to your doorstep in Nigeria in the Safest Way Possible!
                    </div>
                    <div className='text-gray-700 text-justify flex flex-col gap-4 sm:p-4 md:p-2 lg:p-2 sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                        <p>
                            Shipping from USA to Nigeria is a surprisingly complex process. It can be difficult to keep track of all the different regulations and requirements for shipping internationally, especially air shipping to Nigeria from the USA. This is why many people to turn to international logistics companies for help. That's where GiddsField come in!
                        </p>

                        <p>
                            GiddsField offers all that you need to ship what you love from USA to Nigeria safely and hassle free. Businesses and individuals alike are using our platform to ship items of different categories like fashion, beauty & personal, electronics, household, auto parts, automobiles, and many more. We offer
                        </p>

                        <ul className="list-disc pl-5">
                            <li>Air Freight Shipping from USA to Nigeria.</li>
                            <li>Car shipping from USA to Nigeria.</li>
                            <li>Air Freight shipping from Nigeria to USA.</li>
                        </ul>

                        <div>
                            Our commitment is to provide our customers with the best possible service at competitive rates, utilizing modern technology and industry expertise.
                        </div>
                    </div>
                </div>


                <div>
                    <div className='text-primary font-bold mb-2 sm:text-base md:text-lg xl:text-xl sm:text-center md:text-center lg:text-center xl:text-center sm:p-2  text-xl'>
                        Shipping to Nigeria Can Have You Tripping, but not anymore!
                    </div>

                    <div className='text-gray-700 text-justify flex flex-col gap-4 sm:p-4 md:p-2 sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                        <div>
                            There are so many things to keep track of when you're shipping internationally, from high shipping costs, taxes to customs forms and documentation. It's easy for even the most experienced shipper to make a mistake that can cost them money or time - if they don't lose their shipment entirely!
                        </div>

                        <div>
                            GiddsField is an incredibly reliable logistics company that helps you ship your items to anywhere in Nigeria with ease. Our website provides everything you need at your fingertips, giving you access to live rates, live shipment tracking, live support assistance, and more while we handle the rest. You won't have any more worries about missing items or exorbitant shipping costs, thanks to our service!
                        </div>

                    </div>

                </div>


            </div>



        </section>
    )
}

export default PortfolioServices