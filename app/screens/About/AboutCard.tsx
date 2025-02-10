import React, { useState } from 'react'
import { contactmap, experiencemap } from '@/app/utils/global'





const AboutContactCard: React.FC<experiencemap> = ({ icon, title, desc }) => {

    return (
        <div className="border border-solid rounded-xl  flex flex-1 flex-col p-8 gap-4">
                <div className='flex items-center justify-center'>{icon}</div>
            <div className='text-2xl font-bold'>{title}</div>
            <div className='p-4'>{desc}</div>
        </div>
    )
}

export default AboutContactCard