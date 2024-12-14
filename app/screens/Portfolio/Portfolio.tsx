import PortfolioHero  from './Hero/PortfolioHero'
import PortfolioAbout from './About/PortfolioAbout'
import PortfolioExperience from './Experience/PortfolioExperience'
import PortfolioProject from './Project/PortfolioProject'
import PortfolioContact from './Contact/PortfolioContact'
import PortfolioWorks from './Works/PortfolioWorks'
import PortfolioServices from './Services/PortfolioServices'

const Portfolio = () => {
    return (
        <section className='w-[95%] 800px:w-[92%] m-auto py-2 h-full'>
            <PortfolioHero />
            <PortfolioAbout />
            <PortfolioExperience />
            <PortfolioProject />
            <PortfolioWorks/>
            <PortfolioServices />
            <PortfolioContact/>
        </section>
    )
}

export default Portfolio