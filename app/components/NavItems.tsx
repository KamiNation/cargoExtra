"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

// third file created and imported in Header component

export const navItemsData = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About",
        url: "/about",
    },
    {
        name: "Services",
        url: "/services",
    },
    {
        name: "How It Works",
        url: "/how",
    },
    {
        name: "Rates & Pricing",
        url: "/rates",
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
            <div className='hidden xl:flex 2xl:flex'>

                {
                    navItemsData && navItemsData.map((navElement, index) => (
                        <Link href={`${navElement.url}`} key={index} passHref>
                            <span
                                className={
                                    `${active === navElement.url ?
                                        `text-primary` : " text-gray-700"} text-[18px] px-4  font-[400] hover:dark:text-red-600 
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
                                                ` text-primary` : " text-black"} text-[18px] px-4 font-Poppins font-[400] hover:dark:text-red-600 hover:text-teal-600
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