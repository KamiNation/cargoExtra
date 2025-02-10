"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'


import { BsTelephone } from "react-icons/bs"
import { FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineMail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";

// third file created and imported in Header component

export const navItemsData = [
    {
        name: "HOME",
        url: "/",
    },
    {
        name: "ABOUT",
        url: "/about",
    },
    {
        name: "SERVICES",
        url: "/services",
    },
    {
        name: "CONTACT",
        url: "/contact",
    },
];


type Props = {
    isMobile: boolean
}


const NavItems: React.FC<Props> = ({ isMobile }) => {
    const [active, setActive] = useState<string>('')

    const pathname = usePathname()

    useEffect(() => {
        if (typeof window !== 'undefined') {  // Ensures that the code only runs in the client
            const currentPath = pathname.replace(/\/$/, ""); // Remove trailing slash if any
            console.log("Current path =>:", currentPath);
            const activeMenu = navItemsData.find(menu => menu.url === currentPath)
            setActive(activeMenu ? activeMenu.url : '')
        }
    }, [pathname])


    return (
        <>
            <div className='hidden  xl:flex 2xl:flex '>

                {
                    navItemsData && navItemsData.map((navElement, index) => (
                        <Link href={`${navElement.url}`} key={index} passHref>
                            <span
                                className={
                                    `${active === navElement.url ?
                                        `text-purple-800` : " text-gray-700"} text-[18px] xl:text-[14.2px] px-4  font-[400] hover:text-purple-600  
                    `}

                            >
                                {navElement.name}
                            </span>
                        </Link>
                    ))
                }

            </div>


            {
                isMobile && (
                    <div className='xl:hidden 2xl:hidden mt-5 flex flex-col  justify-center items-center'>
                        {
                            navItemsData && navItemsData.map((navElement, index) => (
                                <Link href={`${navElement.url}`} key={index} passHref>
                                    <span
                                        className={
                                            `${active === navElement.url ?
                                                ` text-purple-900` : " text-gray-800"} text-[18px] px-4 font-Poppins font-[400] text-purple-900
                    `}

                                    >
                                        {navElement.name}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default NavItems



export const navSocialData = [
    {
        icon: <BsTelephone />,
        url: "+23470035751981",
    },
    {
        icon: <FaWhatsapp />,
        url: "https://wa.link/x9xebz",
    },
    {
        icon: <MdOutlineMail />,
        url: "@gmail.com",
    },
    {
        icon: <IoLogoFacebook />,
        url: "facebook.com",
    },
];


export const NavSocial: React.FC<Props> = ({ isMobile }) => {
    return (
        <>
            <div className='hidden  xl:flex 2xl:flex '>

                {
                    navSocialData && navSocialData.map((navSocial, index) => (
                        <Link href={`${navSocial.url}`} key={index} passHref>
                            <span
                                className={
                                    `${
                                        " flex justify-around text-black hover:text-purple-900"} text-[18px] xl:text-[14.2px] px-4  font-[400]  
            `}>
                                {navSocial.icon}
                            </span>
                        </Link>
                    ))
                }

            </div>


            {
                isMobile && (
                    <div className='xl:hidden 2xl:hidden mt-5 flex flex-col  justify-center items-center'>
                        {
                            navItemsData && navItemsData.map((navSocial, index) => (
                                <Link href={`${navSocial.url}`} key={index} passHref>
                                    <span
                                        className={
                                            `${
                                                " flex justify-around text-black hover:text-purple-900"} text-[18px] xl:text-[14.2px] px-4  font-[400]  
                    `}

                                    >
                                        {navSocial.name}
                                    </span>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}