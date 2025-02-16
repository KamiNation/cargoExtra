"use client"

import React, { useEffect, useRef } from 'react'
import Header from '../Header'
import ContactMap from './ContactMap'
import ContactForm from './ContactForm'
import OpenLayersMap from './map/Map'
import anime from "animejs";


const Contact = () => {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            if (boxRef.current) {
                anime({
                    targets: boxRef.current,
                    scale: [0.5, 0.6],
                    duration: 5000,
                    easing: "easeInOutElastic(1, .6)",
                    loop: true
                });
            }
        }, 100); // Small delay to ensure mounting
    }, []);


    return (
        <section className='w-[100%] 800px:w-[92%] m-auto  h-full' id="contact">
            <Header />

            <section id="contact-hero" className="
                relative w-full h-80
                bg-[url('/contact_Us.jpg')] 
                bg-cover bg-center bg-no-repeat 
                flex text-white font-bold"></section>

            <section id="contact-image" className='w-full h-screen'>
                <div className='flex gap-4'>
                    <div className="
                relative w-full h-80
                bg-[url('/lagosAddress.jpg')] 
                bg-cover bg-center bg-no-repeat 
                flex text-white font-bold border border-solid rounded-lg">
                        Suite A2, Sahco Export Shed/Warehouse, Nahco
                    </div>

                    <div className="
                relative w-full h-80
                bg-[url('/canadaAddress.jpg')] 
                bg-cover bg-center bg-no-repeat 
                flex text-white font-bold border border-solid rounded-lg">
                        Unit 162, 1885-1895
                    </div>
                </div>
            </section>


            <section id="contact-list" className='w-full h-screen'>
                <ContactMap />
            </section>

            <section id="contact-map" className='w-full h-screen overflow-hidden pt-4'>
                <div className="text-blue-900 text-2xl text-center font-bold pb-4 pl-12 pr-12" ref={boxRef}>Contact Us</div>
                <div className='flex pl-12 pr-12 gap-8'>
                    <div className='flex flex-1'>
                        <OpenLayersMap />
                    </div>

                    <div className='flex flex-1 '>
                        <ContactForm />
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Contact