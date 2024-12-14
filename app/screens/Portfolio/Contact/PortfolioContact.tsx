import React from 'react'
import PortfolioContactMap from './PortfolioContactMap'
import { contactMap } from '@/app/utils/global';

// import MatrixEffect from '@/app/components/MatrixEffect';
// import ComponentWithMatrixBG from '@/app/utils/MatrixHook';
// import MatrixEffectText from '@/app/components/matrix/MatrixText';

const PortfolioContact: React.FC<contactMap> = ({whatsapp}) => {
    const currentYear = new Date().getFullYear();

    return (
        <section id='contact' className='w-full min-h-[50vh] mt-4  text-primary relative'>
            <div className="flex justify-between  my-8 mx-auto  sm:flex-wrap md:flex-wrap ">
                <PortfolioContactMap />
            </div>
            <div className='flex items-center justify-center gap-2'>
                <p className='flex justify-center items-center sm:p-2.5 text-xl sm:text-base' > &#169; Copyright {currentYear} </p>
                <p className='flex justify-center items-center sm:hidden md:hidden text-xl' >GiddsField Global Logistics LLC. All right reserved.</p>
            </div>
        </section>
    )
}

export default PortfolioContact