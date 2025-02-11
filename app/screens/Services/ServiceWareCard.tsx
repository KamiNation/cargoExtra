import { experiencemap } from '@/app/utils/global'
import React from 'react'

const ServiceWareCard: React.FC<experiencemap> = ({ title }) => {
    return (
        <div className='flex gap-4 justify-around'>
            <div className=' flex items-center justify-center p-4  max-w-[280px] max-h-12 text-purple-800 border rounded-xl border-solid'>
                {title}
            </div>
        </div>

    )
}

export default ServiceWareCard