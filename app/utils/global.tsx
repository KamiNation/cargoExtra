import { ImageLoader, ImageProps, StaticImageData } from "next/image";
import { ReactElement } from "react";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiRotateRight } from "react-icons/bi";
import { FaHashnode } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";


export interface contactMap {
    whatsapp?: boolean
}
export interface aboutmap {
    icon?: ReactElement<any>
    desc?: string
    year?: string
    skill?: string
}


export const portfolioAboutMap: aboutmap[] = [
    {
        icon: <BiRotateRight />,
        desc: "Experience",
        year: "1 year",
        skill: "Technical Writing",
    },
    {
        icon: <BiRotateRight />,
        desc: "Experience",
        year: "11 month",
        skill: "Software Development",
    }
]



export interface experiencemap {
    icon?: ReactElement<any>
    year?: string
    title?: string
    rank?: string
    desc?: string

}

export const portfolioExperienceSW: experiencemap[] = [
    {
        icon: <BiRotateRight />,
        title: "Awesome Team",
        desc: "Our professionals assist in making sure that your goods get delivered to you in good shape.",
    },
    {
        icon: <BiRotateRight />,
        title: "Excellent Support",
        desc: "If you face any trouble, you can always let our dedicated support team help you. They are ready for you 24/7.",
    },
    {
        icon: <BiRotateRight />,
        title: "Faster Delivery",
        desc: "By choosing any of our shipping methods, we make sure that your orders get delivered as fast as possible.",
    },
]




export const portfolioProjectMap: experiencemap[] = [
    {
        icon: <BiRotateRight />,
        title: "Free USA Address",
        desc: "We offer FREE USA and UK addresses that allows you to shop and ship what you love from the USA & UK and receive locally anywhere in Nigeria",
    },
    {
        icon: <BiRotateRight />,
        title: "Zero Inventory Charge",
        desc: "Where other shippers charge unnecessary high inventory fee another hidden charges that subsequently leads to high shipping cost. CargoExtra offers FREE Inventory charge and not hidden charges.",
    },
    {
        icon: <BiRotateRight />,
        title: "Free insurance",
        desc: "The best part about CargoExtra is that we offer free insurance on all the goods you need to be shipped.",
    },
    {
        icon: <BiRotateRight />,
        title: "Free Consolidation and Packaging",
        desc: "Upon shipment, we offer customized packaging and consolidation services that meet industry standards.",
    },
    {
        icon: <BiRotateRight />,
        title: "Transparent Lowest Shipping Cost",
        desc: "We value the trust of our customers, hence we offer the lowest shipping cost that covers customs duty and delivery cost to your destination.",
    },
    {
        icon: <BiRotateRight />,
        title: "15 Days Free Storage",
        desc: "Where other shippers offers less than 10 days, CargoExtra gives up to 15 Days FREE storage to give you ample time to shop more from multiple store and also be able to ship to Nigeria as one shipment with just one shipping cost.",
    },
    {
        icon: <BiRotateRight />,
        title: "Real-Time Tracking",
        desc: "With ExtraCargo, you are always aware of the whereabouts of your shipments. Our simple to use real-time tracking feature on our website enables you to track your delivery’s whereabouts every minute of the day!",
    },
    {
        icon: <BiRotateRight />,
        title: "Dedicated support staff",
        desc: "We have a seamless system that guarantees smooth transactions. Should you encounter any issue, you have our super reliable, friendly, and highly skilled professionally-trained support staff. They will work with you personally to solve your problems and address your concerns!",
    },
]


export interface contactmap {
    id?: number
    title?: string
    desc?: 
        {
            addr: string
            addr1: string
            addr2: string
            Tell: string
            Tell2: string
            Tell3: string
            Email: string
        }
    
    parent?: string
    child?: string
    child1?: string
    child2?: string
    child3?: string
    child4?: string
    child5?: string
    child6?: string

}



export const portfolioContactMap: contactmap[] = [
    {
        title: "Lagos Office",
        desc: 
            {
                addr: "45, Osolo Way",
                addr1: "By ITF Building, Ajao Estate",
                addr2: "Isolo. Lagos, Nigeria",
                Tell: "Tell 1: +234 700 010 0400",
                Tell2: "Tell 2: +234 810 737 7307",
                Tell3: "Tell 3: +234 810 737 7716",
                Email: "Email: info@cargoextra.com",
            },
        
    },
    {
        parent: "Company",
        child: "About Us",
        child1: "Contact Us",
        child2: "Rates & Pricing",
        child3: "FAQ",
        child4: "Privacy Policy",
        child5: "Terms of Use",
        child6: "Fraud Awareness",
    },
    {
        parent: "Services",
        child: "Air Freight",
        child1: "Shop For Me",
        child2: "Shipping from China",
    },
    {
        parent: "Follow Us",
        child: "Twitter",
        child1: "Facebook",
        child2: "LinkedIn",
        child3: "Instagram",
        child4: "Whatsapp",
    }
]





export const portfolioWorkMap: experiencemap[] = [
    {
        icon: <BiRotateRight />,
        title: "Free US Address In 30 Sec",
        desc: "Simply fill in your name, address, and email to register for free. Start shopping on US online stores immediately using your assigned US address.",
    },
    {
        icon: <BiRotateRight />,
        title: "Online US Stores Shop ",
        desc: "Start shopping immediately on Amazon, eBay, Zappos, Walmart, and over 120,000 US online stores. You can also shop on a number of other websites in the USA using your assigned US address.",
    },
    {
        icon: <BiRotateRight />,
        title: "Your US Address At Checkout",
        desc: "Go to your address book on any online store you are shopping from and set your assigned US address as your delivery address. Send all your purchases to your assigned US address.",
    },
    {
        icon: <BiRotateRight />,
        title: "Save Big On Shopping",
        desc: "We repackage your shipment if you want to remove unnecessary boxes. We consolidate all your purchases from different so that you pay your items as one.",
    },
    {
        icon: <BiRotateRight />,
        title: "Select Your Preferred Shipping Method",
        desc: "Choose from our flexible shipping method depending on how urgent you want your items delivered. We deliver",
    },
]
