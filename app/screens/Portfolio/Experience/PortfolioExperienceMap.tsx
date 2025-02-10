import { experiencemap, portfolioExperienceSW, } from '@/app/utils/global'
import PortfolioExperienceCard from './PortfolioExperienceCard'

const PortfolioExperienceMap = () => {
    return (
        <>

            <div className='flex-1 flex flex-col  gap-8'>
                {
                    portfolioExperienceSW.map((SW: experiencemap, index) => (
                        <PortfolioExperienceCard key={index}
                            desc={SW.desc}
                            title={SW.title}
                        />
                    ))
                }
                {/* <div className='flex flex-col p-5 gap-20 sm:flex sm:flex-col md:flex md:flex-col lg:flex-col xl:flex-col'>

                  */}
            </div>
        {/* </div > */}


            


        </>

    )
}

export default PortfolioExperienceMap