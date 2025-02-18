"use client"


import React from 'react'
import ServiceWareCard from './ServiceWareCard'
import { experiencemap, wareHouseMap } from '@/app/utils/global'






const ServiceWareMap = () => {
    return (
        <div className="flex justify-between sm:flex-col">
            {
                wareHouseMap.map((project: experiencemap, index) => (
                    <ServiceWareCard key={index}
                        title={project.title}
                    />
                ))
            }
        </div>
    )
}

export default ServiceWareMap