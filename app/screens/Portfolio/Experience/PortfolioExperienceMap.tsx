import { experiencemap, portfolioExperienceSW,  } from '@/app/utils/global'
import PortfolioExperienceCard from './PortfolioExperienceCard'

const PortfolioExperienceMap = () => {
    return (
        <>

            <div className='p-6 flex-1 rounded-[2rem] text-center text-primary  '>
                <div className='flex p-5 gap-20 sm:flex sm:flex-col md:flex md:flex-col lg:flex-col xl:flex-col'>

                    {
                        portfolioExperienceSW.map((SW: experiencemap, index) => (
                            <PortfolioExperienceCard key={index}
                                desc={SW.desc}
                                icon={SW.icon}
                                title={SW.title}
                                year={SW.year}
                            />
                        ))
                    }
                </div>
            </div>


            


        </>

    )
}

export default PortfolioExperienceMap