import { contactmap, portfolioContactMap, contactMap } from '@/app/utils/global'
import React from 'react'
import PortfolioContactCard from './PortfolioContactCard'
import { BiLogoWhatsapp } from 'react-icons/bi'
import Button from '@/app/components/Button'


const PortfolioContactMap: React.FC<contactMap> = ({ whatsapp }) => {



    return (
        <>
            {
                portfolioContactMap.map((contact: contactmap, index) => (
                    <PortfolioContactCard key={index}
                        id={index}
                        title={contact.title}
                        desc={contact.desc}
                        parent={contact.parent}
                        child={contact.child}
                        child1={contact.child1}
                        child2={contact.child2}
                        child3={contact.child3}
                        child4={contact.child4}
                        child5={contact.child5}
                        child6={contact.child6}
                        />
                ))
            }
        </>

    )
}

export default PortfolioContactMap