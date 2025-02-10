import React from 'react'
import Header from '../Header'
import Image from 'next/image'

const Services = () => {
    return (
        <section className='w-[100%] 800px:w-[92%] m-auto  h-full'>
            <Header />

            <section id="about-hero" className="
                relative w-full h-80
                bg-[url('/aboutPlane.jpg')] 
                bg-cover bg-center bg-no-repeat 
                flex text-white font-bold
">
                <div className='flex items-center justify-center pl-8'>
                    SERVICES
                </div>
            </section>

            <section id="service-us" className='flex min-h-screen'>

                <div className='flex  flex-1 p-12 items-center justify-center'>
                    <div className="flex flex-1">
                        <div className='flex flex-1 border border-solid rounded-xl'>
                            <Image src="/contContainer.jpeg" className=" bg-cover bg-no-repeat w-[100%] h-[100%] border border-solid rounded-xl" alt='about-freigth' width="800" height="800" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 p-8 text-black text-justify">
                        <div className="font-bold text-3xl">

                            SEA FREIGHT
                        </div>

                        <div className="text-gray-800">
                            Our highly experienced staff are well equipped to advise you on the various procedures necessary and most cost effective way of importing and exporting cargo by sea. We have built strong relationships with many shipping lines and agencies as a result of being a service provider to many of them. This enhances our ability to be efficient and cost effective. Our sea freight division offers a full range of services.
                        </div>

                        <div className="text-gray-800 text-2xl font-bold">
                            Overview
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className='p-5'>
                                <ul className='list-disc'>
                                    <li>Full-container-load (FCL) Consolidation</li>
                                    <li>Less-than-container-load (LCL) Coooonsolidation</li>
                                    <li>Multimodal Transportation by Sea/Air/Road</li>
                                    <li>Domestic and International Freight</li>
                                    <li>Warehousing</li>
                                </ul>
                            </div>

                            <div>
                                <div className='uppercase flex items-center justify-center p-2 bg-blue-900 max-w-[130px] max-h-12 text-white hover:bg-purple-900'>
                                    get service
                                </div>
                            </div>



                        </div>


                    </div>
                </div>
            </section>

            <section id="service-catalogue" className="flex h-[28rem] 
                        bg-[url('/roofie.jpg')] 
                        bg-cover bg-center bg-no-repeat  items-center justify-center">

                <div className='flex gap-8 p-8 flex-1'>
                    <div className='flex-1 flex items-center justify-center'>
                        <Image src={"/catalogue.jpg"} alt='catalogue' width={800} height={800} className="w-[70%] h-[70%] border rounded-xl border-solid" />
                    </div>

                    <div className='flex flex-1 flex-col p-20 gap-8'>
                        <div className='uppercase font-bold text-4xl text-purple-900'>
                            catalogue
                        </div>

                        <div className='flex flex-col gap-8'>
                            <div className='font-bold text-black text-xl'>
                                Get a copy of our Catalogue here
                            </div>

                            <div className='uppercase bg-blue-900 flex items-center justify-center p-4  max-w-[130px] max-h-12 text-white hover:bg-purple-900 border rounded-xl border-solid'>
                                download
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default Services