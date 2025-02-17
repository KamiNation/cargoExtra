"use client"

import React, { useEffect, useRef } from 'react'
import Header from '../Header'
import ContactMap from './ContactMap'
import ContactForm from './ContactForm'
import OpenLayersMap from './map/Map'
import anime from "animejs";


const Contact = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const leftImageRef = useRef<HTMLImageElement | null>(null);
    const rightImageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {

        if (!boxRef.current || !leftImageRef.current || !rightImageRef.current) return;

        anime({
            targets: boxRef.current,
            scale: [0.5, 1.0],
            duration: 1500,
            easing: "easeInOutElastic(1, .6)",
            loop: true,  // Ensures continuous animation
        });

        const animation = anime.timeline();
        // Image Slide-in Animations
        animation.add(
            {
                targets: leftImageRef.current,
                translateX: [-500, 0], // Slide in from Left
                opacity: [0, 1],
                duration: 1000,
                easing: "easeInOutQuad",
            },
            // Overlap this animation slightly with the previous one
        );

        animation.add(
            {
                targets: rightImageRef.current,
                translateX: [500, 0], // Slide in from Right
                opacity: [0, 1],
                duration: 1000,
                easing: "easeInOutQuad",
            },
            
        );

    }, []);



    return (
        <section className='w-[100%] 800px:w-[92%] m-auto  h-full' id="contact">
            <Header />

            <section id="contact-hero" className="
                relative w-full h-80
                bg-[url('/contact_Us.jpg')] 
                bg-cover bg-center bg-no-repeat 
                flex text-white font-bold"></section>

            <section id="contact-image" className='w-full h-96 flex gap-6 p-16 '>
                <div
                    ref={leftImageRef}
                    className="
                relative w-full h-80
                bg-[url('/lagosAddress.jpg')] 
                bg-cover bg-center bg-no-repeat 
                flex flex-1 text-white font-bold border border-solid rounded-lg">
                    <p className="text-2xl font-bold flex items-center justify-center pl-2"> Suite A2, Sahco Export Shed/Warehouse, Nahco  </p>
                </div>

                <div
                    ref={rightImageRef}
                    className="
                relative w-full h-80
                bg-[url('/canadaAddress.jpg')] 
                bg-cover bg-center bg-no-repeat 
                flex flex-1 text-white font-bold border border-solid rounded-lg">
                    <p className="text-2xl font-bold flex items-center justify-center pl-2">
                        Unit 162, 1885-1895
                    </p>
                </div>

            </section>


            <section id="contact-list" className='w-full h-80 pt-8'>
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