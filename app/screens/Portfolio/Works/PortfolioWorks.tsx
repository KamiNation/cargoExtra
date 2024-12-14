import React from 'react'
import PortfolioProjectMap from './PortfolioProjectMap'

const PortfolioWorks = () => {
    return (
        <section id='works' className='w-full min-h-screen mt-4 text-primary relative p-2.5'>
            <h1 className="text-center text-4xl font-bold text-primary sm:text-base">How It Works</h1>
            <div className="flex flex-wrap  ">
                <div className="gap-10  flex sm:flex-col md:flex-col flex-wrap">
                    <PortfolioProjectMap />
                </div>
            </div>
        </section>
    )
}

export default PortfolioWorks