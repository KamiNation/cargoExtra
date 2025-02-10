import { aboutmap } from '@/app/utils/global'
import Image from 'next/image'
import React, { Fragment } from 'react'




const PortfolioAboutCard: React.FC<aboutmap> = ({ img, title }) => {
    return (


        <div className="px-14 gap-4 flex flex-col flex-1 ">
            
            <div className='text-center text-xl font-semibold'>{title}</div>

            <div className=' flex-1 flex items-center justify-center'>
                <Image
                    src={img}
                    alt='frieght'
                    width={700}
                    height={700}
                    className='flex-1 border rounded-3xl'
                />
            </div>
        </div>
    )
}

export default PortfolioAboutCard

